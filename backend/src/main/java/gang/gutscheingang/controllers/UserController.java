package gang.gutscheingang.controllers;

import gang.gutscheingang.models.User;
import gang.gutscheingang.repositories.SectorRepository;
import gang.gutscheingang.repositories.UserRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("user")
@Tag(name="Users")
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping(produces = "application/json")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public User getUserById(@PathVariable UUID uuid) {
        return userRepository.findByUuid(uuid);
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public User updateUser(@PathVariable UUID uuid, @RequestBody User user) {
        return userRepository.findById(uuid)
                .map(
                        foundUser -> {
                            foundUser.updateWith(user);
                            return userRepository.save(foundUser);
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public void deleteUser(@PathVariable UUID uuid) {
        try {
            userRepository.deleteById(uuid);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


}
