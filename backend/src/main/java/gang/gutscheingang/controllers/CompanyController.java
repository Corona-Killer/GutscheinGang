package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Company;
import gang.gutscheingang.models.Sector;
import gang.gutscheingang.models.SystemUser;
import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.SectorRepository;
import gang.gutscheingang.repositories.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import javax.validation.Valid;
import java.security.Principal;

import java.util.List;

import java.util.UUID;

@RestController
@RequestMapping("company")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name = "Companies")
public class CompanyController extends GenericController {

    private final CompanyRepository companyRepository;
    private final SectorRepository sectorRepository;
    private final UserRepository userRepository;


    @Autowired
    public CompanyController(CompanyRepository companyRepository, SectorRepository sectorRepository, UserRepository userRepository) {
        this.companyRepository = companyRepository;
        this.sectorRepository = sectorRepository;
        this.userRepository = userRepository;
    }

    /**
     * Creates a new Company
     *
     * @param company the company to create
     * @return the created company
     */
    @PostMapping(produces = "application/json")
    public Company createCompany(@RequestBody @Valid Company company, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        Sector sector;
        sector = sectorRepository.findByNameIgnoreCase(company.getSector().getName());

        // if not found add
        if (sector == null) {
            sector = sectorRepository.save(company.getSector());
        }

        company.setSector(sector);
        company.setTags();

        Company savedCompany = companyRepository.save(company);

        try { currentUser.getCompanyList().add(company);
            userRepository.save(currentUser);
        } catch (Exception e) {
            // rollback
            companyRepository.deleteById(savedCompany.getUuid());
        }

        return savedCompany;
    }

    @GetMapping(produces = "application/json")
    public List<Company> getCompanies(
            @RequestParam(defaultValue = "0") int pagenumber,
            @RequestParam(defaultValue = "10") int pagesize,
            @RequestParam(required = false) String query
    ) {

        if (query == null || query.equals("")) {
            return companyRepository.findAll(PageRequest.of(pagenumber, pagesize));
        } else {
            return companyRepository.findAllByTags(query, PageRequest.of(pagenumber, pagesize));
        }
    }

    @GetMapping(value = "/{uuid}/vouchers", produces = "application/json")
    public List<Voucher> getVouchersOfCompany(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if company is not in companylist of current user
        if (currentUser.getCompanyList().stream().map(Company::getUuid).noneMatch(uuid::equals)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return companyRepository.findById(uuid).map(Company::getVoucherList).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Company getCompanyById(@PathVariable UUID uuid) {
        return companyRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public Company updateCompany(@PathVariable UUID uuid, @RequestBody @Valid Company company, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if company is not in companylist of current user
        if (currentUser.getCompanyList().stream().map(Company::getUuid).noneMatch(uuid::equals)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        return companyRepository
                .findById(uuid)
                .map(foundCompany -> {
                    foundCompany.updateWith(company);
                    return companyRepository.save(foundCompany);
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteCompany(@PathVariable UUID uuid, Principal principal) {
        SystemUser currentUser = userRepository.findByEmailIgnoreCase(principal.getName());

        // if company is not in companylist of current user
        if (currentUser.getCompanyList().stream().map(Company::getUuid).noneMatch(uuid::equals)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }

        try {
            companyRepository.deleteById(uuid);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
