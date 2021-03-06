package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Sector;
import gang.gutscheingang.repositories.SectorRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("sector")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name="Sectors")
public class SectorController extends GenericController {

    private final SectorRepository sectorRepository;

    @Autowired
    public SectorController(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    @GetMapping(produces = "application/json")
    public List<Sector> getSectors() {
        return sectorRepository.findAll();
    }
}
