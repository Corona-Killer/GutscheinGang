package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.SystemUser;
import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.UserRepository;
import gang.gutscheingang.repositories.VoucherRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.Collection;
import java.util.UUID;

@RestController
@RequestMapping("voucher")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name = "Vouchers")
public class VoucherController extends GenericController {

    private final VoucherRepository voucherRepository;
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;

    @Autowired
    public VoucherController(VoucherRepository voucherRepository, UserRepository userRepository, CompanyRepository companyRepository) {
        this.voucherRepository = voucherRepository;
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Voucher getVoucherById(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if voucher not in own voucherlist
        if (currentUser.getVoucherList().stream().map(Voucher::getUuid).noneMatch(uuid::equals)) {
            // and if voucher is not in voucherlist of the companies of current user
            if (currentUser.getCompanyList().stream().map(Company::getVoucherList)
                    .flatMap(Collection::stream).map(Voucher::getUuid).noneMatch(uuid::equals)) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN);
            }
        }

        return voucherRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping(value = "/{uuid}/current_amount", produces = "application/json")
    public Voucher updateVoucherAmount(@PathVariable UUID uuid, @RequestBody int amount, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if voucher not in own voucherlist
        if (currentUser.getVoucherList().stream().map(Voucher::getUuid).noneMatch(uuid::equals)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return voucherRepository.findById(uuid)
                .map(
                        foundVoucher -> {
                            try {
                                foundVoucher.subtractValueInEurCt(amount);
                            } catch (IllegalArgumentException ex) {
                                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
                            }
                            return voucherRepository.save(foundVoucher);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public Voucher deleteVoucher(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if voucher not in own voucherlist
        if (currentUser.getVoucherList().stream().map(Voucher::getUuid).noneMatch(uuid::equals)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        Voucher voucher;
        try {
            voucher = voucherRepository.findByUuid(uuid);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Company company = voucher.getCompany();
        company.deleteVoucher(voucher);
        companyRepository.save(company);

        voucher = currentUser.deleteVoucher(voucher);
        userRepository.save(currentUser);

        voucherRepository.deleteById(uuid);
        return voucher;
    }


}
