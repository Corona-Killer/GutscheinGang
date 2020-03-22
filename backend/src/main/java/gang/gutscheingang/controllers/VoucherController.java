package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Voucher;
import gang.gutscheingang.repositories.VoucherRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("voucher")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Tag(name="Vouchers")
public class VoucherController {

    private VoucherRepository voucherRepository;

    @Autowired
    public VoucherController(VoucherRepository voucherRepository) {
        this.voucherRepository = voucherRepository;
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Voucher getVoucherById(@PathVariable UUID uuid) {
        return voucherRepository.findById(uuid).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping(value ="/{uuid}/current_amount", produces = "application/json")
    public Voucher updateVoucherAmount(@PathVariable UUID uuid, @RequestBody int amount) {
        return voucherRepository.findById(uuid)
                .map(
                        foundVoucher -> {
                            try {
                                foundVoucher.subtractValueInEurCt(amount);
                            } catch (IllegalArgumentException ex) {
                               throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
                            }
                            return voucherRepository.save(foundVoucher);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteVoucher(@PathVariable UUID uuid) {
        try {
            voucherRepository.deleteById(uuid);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
