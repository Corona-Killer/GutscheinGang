package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.repositories.CompanyRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.UUID;

@RestController
@RequestMapping("company")
@Tag(name="Companies")
public class CompanyController {

    private CompanyRepository companyRepository;

    @Autowired
    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    /**
     * Creates a new Company
     * @param company the company to create
     * @return the created company
     */
    @PostMapping(produces = "application/json")
    public Company createCompany(@RequestBody Company company) {
        return companyRepository.save(company);
    }

    @GetMapping(produces = "application/json")
    public Iterable<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Company getCompanyById(@PathVariable UUID uuid) {
        return companyRepository.findByUuid(uuid);
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public Company updateCompany(@PathVariable UUID uuid, @RequestBody Company company) {
        // TODO

        return companyRepository.findById(uuid)
                .map(
                        foundCompany -> {
                            foundCompany.updateWith(company);
                            return companyRepository.save(foundCompany);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteCompany(@PathVariable UUID uuid) {
        try {
            companyRepository.deleteById(uuid);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }


}
