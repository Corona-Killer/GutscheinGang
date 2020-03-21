package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Sector;
import gang.gutscheingang.repositories.CompanyRepository;
import gang.gutscheingang.repositories.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("sector")
public class SectorController {

    private SectorRepository sectorRepository;

    @Autowired
    public SectorController(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    @GetMapping(produces = "application/json")
    public Iterable<Sector> getSectors() {
        return sectorRepository.findAll();
    }
}
