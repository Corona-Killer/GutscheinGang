package gang.gutscheingang.repositories;

import gang.gutscheingang.models.Voucher;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface VoucherRepository extends CrudRepository<Voucher, UUID> {

    public Voucher findByUuid(UUID uuid);

    @Override
    List<Voucher> findAll();

}
