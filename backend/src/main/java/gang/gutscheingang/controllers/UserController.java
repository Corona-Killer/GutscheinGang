package gang.gutscheingang.controllers;

import gang.gutscheingang.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("user")
public class UserController {

    @PostMapping(produces = "application/json")
    public User createUser(@RequestBody User user) {
        return null;
    }

    @GetMapping(produces = "application/json")
    public List<User> getUsers() {
        return null;
    }

    @GetMapping(value = "/{uuid}", produces = "application/json")
    public User getUserById(@PathVariable String uuid) {
        return null;
    }

    @PutMapping(value = "/{uuid}", produces = "application/json")
    public User updateUser(@PathVariable UUID uuid, @RequestBody User user) {
        return null;
    }

    @DeleteMapping(value = "/{uuid}", produces = "application/json")
    public User deleteUser(@PathVariable UUID uuid) {
        return null;
    }


}
