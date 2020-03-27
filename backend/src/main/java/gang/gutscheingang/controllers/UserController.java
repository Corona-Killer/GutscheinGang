package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.SystemUser;

import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.models.VoucherBuyTransaction;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.UserRepository;
import gang.gutscheingang.repositories.VoucherRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.security.core.Authentication;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name = "Users")
public class UserController extends GenericController {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final VoucherRepository voucherRepository;
    private final Argon2PasswordEncoder argon2PasswordEncoder;

    @Autowired
    public UserController(UserRepository userRepository, CompanyRepository companyRepository, VoucherRepository voucherRepository, Argon2PasswordEncoder argon2PasswordEncoder) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.voucherRepository = voucherRepository;
        this.argon2PasswordEncoder = argon2PasswordEncoder;
    }

    @PostMapping(produces = "application/json")
    public SystemUser createUser(@RequestBody @Valid SystemUser systemUser) {
        systemUser.setPassword(argon2PasswordEncoder.encode(systemUser.getPassword()));
        systemUser.setUsername(systemUser.getUsername().toLowerCase());
        return userRepository.save(systemUser);
    }

    @GetMapping(value = "/", produces = "application/json")
    public SystemUser getCurrentUser(Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        return userRepository.findByUuid(currentUser.getUuid());
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public SystemUser updateUser(@PathVariable UUID uuid, @RequestBody @Valid SystemUser systemUser, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());
        if (!currentUser.getUuid().equals(uuid)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return userRepository.findById(uuid)
                .map(
                        foundSystemUser -> {
                            foundSystemUser.updateWith(systemUser);
                            return userRepository.save(foundSystemUser);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteUser(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());
        if (!currentUser.getUuid().equals(uuid)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        try {
            userRepository.deleteById(uuid);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/{uuid}/voucher", produces = "application/json")
    public Voucher buyVoucher(@PathVariable UUID uuid, @RequestBody @Valid VoucherBuyTransaction transaction, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());
        if (!currentUser.getUuid().equals(uuid)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        SystemUser systemUser = userRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Company company = companyRepository.findById(transaction.getCompanyUuid()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        Voucher voucher = systemUser.buyVoucher(company, transaction.getValueInEurCt());
        voucher = voucherRepository.save(voucher);
        userRepository.save(systemUser);

        company.addVoucher(voucher);
        companyRepository.save(company);
        return voucher;
    }

    @GetMapping(value = "/{uuid}/companies", produces = "application/json")
    public List<Company> getCompaniesOfUser(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());
        if (!currentUser.getUuid().equals(uuid)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return userRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).getCompanyList();
    }

    @GetMapping(value = "/{uuid}/vouchers", produces = "application/json")
    public List<Voucher> getVouchersOfUser(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());
        if (!currentUser.getUuid().equals(uuid)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return userRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).getVoucherList();
    }
}
