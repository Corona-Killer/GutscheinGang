package gang.gutscheingang.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Sector {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )    private UUID uuid;
    private String name;

    public UUID getUuid() {
        return uuid;
    }

    public String getName() {
        return name;
    }
}
