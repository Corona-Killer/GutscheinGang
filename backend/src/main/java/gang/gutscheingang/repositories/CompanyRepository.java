package gang.gutscheingang.repositories;

import gang.gutscheingang.models.Company;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

public interface CompanyRepository extends CrudRepository<Company, UUID> {

    public List<Company> findFirstByNameIgnoreCase(String name);

    public Company findByUuid(UUID uuid);

    List<Company> findAll(Pageable pageable);
    public List<Company> findAllByTags(String tag, Pageable pageable);



}
