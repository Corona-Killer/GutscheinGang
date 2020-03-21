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

    @ElementCollection
    private List<Voucher> voucherList;

    @ElementCollection
    private List<Company> companyList;

    private String firstName;
    private String lastName;

    private String jwtToken;

    public void updateWith(User user) {
        this.email = user.email;
        this.voucherList = user.voucherList;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }

    public UUID getUuid() {
        return uuid;
    }

    public String getEmail() {
        return email;
    }

    public List<Voucher> getVoucherList() {
        return voucherList;
    }
    public List<Company> getCompanyList() {
        return companyList;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

}
