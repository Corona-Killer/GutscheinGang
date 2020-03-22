package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.SystemUser;

import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.models.VoucherBuyTransaction;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.UserRepository;
import gang.gutscheingang.repositories.VoucherRepository;
import gang.gutscheingang.validators.CompanyValidator;
import gang.gutscheingang.validators.UserValidator;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name="Users")
public class UserController {

    private UserRepository userRepository;
    private CompanyRepository companyRepository;
    private VoucherRepository voucherRepository;

    @Autowired
    public UserController(UserRepository userRepository, CompanyRepository companyRepository, VoucherRepository voucherRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.voucherRepository = voucherRepository;
    }

    @PostMapping(produces = "application/json")
    public SystemUser createUser(@RequestBody SystemUser systemUser) {
        if(!UserValidator.validate(systemUser))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

        return userRepository.save(systemUser);
    }

    @PostMapping(value = "/{uuid}/voucher", produces = "application/json")
    public Voucher buyVoucher(@PathVariable UUID uuid, @RequestBody VoucherBuyTransaction transaction) {
        SystemUser systemUser = userRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Company company = companyRepository.findById(transaction.getCompanyUuid()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));;
        Voucher voucher = systemUser.buyVoucher(company, transaction.getValueInEurCt());
        return voucherRepository.save(voucher);
    }


    @GetMapping(value = "/{uuid}/companies", produces = "application/json")
    public List<Company> getCompaniesOfUser(@PathVariable UUID uuid) {
        return userRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).getCompanyList();
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public SystemUser getUserById(@PathVariable UUID uuid) {
        return userRepository.findByUuid(uuid);
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public SystemUser updateUser(@PathVariable UUID uuid, @RequestBody SystemUser systemUser) {
        return userRepository.findById(uuid)
                .map(
                        foundSystemUser -> {
                            foundSystemUser.updateWith(systemUser);
                            return userRepository.save(foundSystemUser);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteUser(@PathVariable UUID uuid) {
        try {
            userRepository.deleteById(uuid);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
