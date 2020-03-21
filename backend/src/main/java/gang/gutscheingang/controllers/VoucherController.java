package gang.gutscheingang.controllers;

import gang.gutscheingang.models.Voucher;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("voucher")
public class VoucherController {

    @PostMapping(produces = "application/json")
    public Voucher createVoucher(Voucher voucher) {
        return null;
    }

    @GetMapping(produces = "application/json")
    public List<Voucher> getVouchers() {
        return null;
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public Voucher getVoucherById(@PathVariable UUID uuid) {
        return null;
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public Voucher updateVoucher(@PathVariable UUID uuid, @RequestBody Voucher voucher) {
        return null;
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public Voucher deleteVoucher(@PathVariable UUID uuid) {
        return null;
    }


}
