package gang.gutscheingang.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID uuid;
    private String email;

    @OneToMany
    private List<Voucher> voucherList;

    private String firstName;
    private String lastName;

    private String jwtToken;

    public UUID getUuid() {
        return uuid;
    }

    public String getEmail() {
        return email;
    }

    public List<Voucher> getVoucherList() {
        return voucherList;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

}
