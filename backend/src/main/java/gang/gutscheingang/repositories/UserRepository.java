package gang.gutscheingang.repositories;

import gang.gutscheingang.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {

    public List<User> findByEmailIgnoreCase(String email);

    public User findByUuid(UUID uuid);

}
