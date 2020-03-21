package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Sector;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("sector")
public class SectorController {

    @GetMapping(produces = "application/json")
    public List<String> getSectors() {
        return null;
    }
}
