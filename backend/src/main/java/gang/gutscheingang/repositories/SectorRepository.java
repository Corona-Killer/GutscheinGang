package gang.gutscheingang.repositories;

import gang.gutscheingang.models.Sector;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface SectorRepository extends CrudRepository<Sector, UUID> {

    Sector findByNameIgnoreCase(String name);

    Sector findByUuid(UUID uuid);

    @Override
    List<Sector> findAll();

}
