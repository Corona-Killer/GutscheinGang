package gang.gutscheingang.repositories;

import gang.gutscheingang.models.Company;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface CompanyRepository extends CrudRepository<Company, UUID> {

    List<Company> findFirstByNameIgnoreCase(String name);

    Company findByUuid(UUID uuid);

    List<Company> findAll(Pageable pageable);
    List<Company> findAllByTags(String tag, Pageable pageable);



}
