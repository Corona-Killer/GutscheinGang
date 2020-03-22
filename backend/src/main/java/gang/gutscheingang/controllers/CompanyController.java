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
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import javax.validation.Valid;
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
    public Company createCompany(@RequestBody @Valid Company company) {
        if(!CompanyValidator.validate(company))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

        Sector sector;
        if(!SectorValidator.validate(company.getSector()))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

        sector = sectorRepository.findByNameIgnoreCase(company.getSector().getName());

        // if not found add
        if (sector == null) {
            sector = sectorRepository.save(company.getSector());
        }

        company.setSector(sector);

        return companyRepository.save(company);
    }

    @GetMapping(produces = "application/json")
    public List<Company> getCompanies(@RequestParam(defaultValue="0") int pagenumber, @RequestParam(defaultValue="10") int pagesize) {
        return companyRepository.findAll(PageRequest.of(pagenumber,pagesize));
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
    public Company updateCompany(@PathVariable UUID uuid, @RequestBody @Valid Company company) {
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
