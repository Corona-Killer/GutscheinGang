package gang.gutscheingang.repositories;

import gang.gutscheingang.models.SystemUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends CrudRepository<SystemUser, UUID> {

    SystemUser findByEmailIgnoreCase(String email);

    SystemUser findByUuid(UUID uuid);

    @Override
    List<SystemUser> findAll();

}
