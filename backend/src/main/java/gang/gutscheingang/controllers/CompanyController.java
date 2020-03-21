package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.repositories.CompanyRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.UUID;

@RestController
@RequestMapping("company")
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
    @ApiResponse(responseCode = "200", description = "create company")
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

    @Operation(summary = "Delete existing person", responses = {
            @ApiResponse(responseCode = "204", description = "Person has been deleted"),
            @ApiResponse(responseCode = "404", description = "Person with such e-mail doesn't exists") })
    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteCompany(@PathVariable UUID uuid) {
        companyRepository.deleteById(uuid);

    }


}
