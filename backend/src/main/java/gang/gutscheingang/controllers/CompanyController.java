package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.Sector;
import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.SectorRepository;
import gang.gutscheingang.validators.CompanyValidator;
import gang.gutscheingang.validators.SectorValidator;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("company")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name="Companies")
public class CompanyController {

    private CompanyRepository companyRepository;
    private SectorRepository sectorRepository;

    @Autowired
    public CompanyController(CompanyRepository companyRepository, SectorRepository sectorRepository) {
        this.companyRepository = companyRepository;
        this.sectorRepository = sectorRepository;
    }

    /**
     * Creates a new Company
     * @param company the company to create
     * @return the created company
     */
    @PostMapping(produces = "application/json")
    public Company createCompany(@RequestBody Company company) {
        if(!CompanyValidator.validate(company))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

        Sector sector;
        try {
            sector = sectorRepository.findByUuid(company.getSector().getUuid());
        } catch (Exception ex) {
            if(!SectorValidator.validate(company.getSector()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

            sector = sectorRepository.save(company.getSector());
        }
        company.setSector(sector);

        return companyRepository.save(company);
    }

    @GetMapping(produces = "application/json")
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @GetMapping(value = "/{uuid}/voucher", produces = "application/json")
    public List<Voucher> getVouchersOfCompany(@PathVariable UUID uuid) {
        return companyRepository.findById(uuid).map(Company::getVoucherList).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Company getCompanyById(@PathVariable UUID uuid) {
        return companyRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public Company updateCompany(@PathVariable UUID uuid, @RequestBody Company company) {
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
