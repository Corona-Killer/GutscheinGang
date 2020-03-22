package gang.gutscheingang.repositories;

import gang.gutscheingang.models.Sector;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface SectorRepository extends CrudRepository<Sector, UUID> {

    public List<Sector> findByNameIgnoreCase(String name);

    public Sector findByUuid(UUID uuid);

}