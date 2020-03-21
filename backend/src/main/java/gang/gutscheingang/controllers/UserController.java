package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.User;
import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.models.VoucherBuyTransaction;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.UserRepository;
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

    @Autowired
    public UserController(UserRepository userRepository, CompanyRepository companyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping(value = "/{uuid}/voucher", produces = "application/json")
    public Voucher buyVoucher(@PathVariable UUID uuid, @RequestBody VoucherBuyTransaction transaction) {
        User user = userRepository.findByUuid(uuid);
        Company company = companyRepository.findByUuid(transaction.getCompanyUuid());
        return user.buyVoucher(company, transaction.getValueInEurCt());
    }

    @GetMapping(value = "/{uuid}/companies", produces = "application/json")
    public List<Company> getCompaniesOfUser(@PathVariable UUID uuid) {
        return userRepository.findByUuid(uuid).getCompanyList();
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public User getUserById(@PathVariable UUID uuid) {
        return userRepository.findByUuid(uuid);
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public User updateUser(@PathVariable UUID uuid, @RequestBody User user) {
        return userRepository.findById(uuid)
                .map(
                        foundUser -> {
                            foundUser.updateWith(user);
                            return userRepository.save(foundUser);
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
