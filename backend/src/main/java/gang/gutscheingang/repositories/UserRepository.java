package gang.gutscheingang.repositories;

import gang.gutscheingang.models.SystemUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends CrudRepository<SystemUser, UUID> {

    public SystemUser findByEmailIgnoreCase(String email);

    public SystemUser findByUuid(UUID uuid);

    @Override
    List<SystemUser> findAll();

}
