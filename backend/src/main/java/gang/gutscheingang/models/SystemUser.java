package gang.gutscheingang.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;
import java.util.UUID;

@Entity
public class SystemUser {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID uuid;

    @NotNull
    @Email
    @Column(unique = true)
    private String email;

    @OneToMany
    @Null
    @JsonIgnore
    private List<Voucher> voucherList;

    @OneToMany
    @JsonIgnore
    @Null
    private List<Company> companyList;

    @NotNull
    @Size(min = 1)
    private String firstName;

    @NotNull
    @Size(min = 1)
    private String lastName;

    @NotNull
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    public SystemUser() { }

    public SystemUser(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public void updateWith(SystemUser systemUser) {
        this.email = systemUser.email.toLowerCase();
        this.firstName = systemUser.firstName;
        this.lastName = systemUser.lastName;
    }

    public UUID getUuid() {
        return uuid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return email;
    }

    public void setUsername(String username) {
        this.email = username.toLowerCase();
    }

    public Voucher buyVoucher(Company company, int valueInEurCt) {
        Voucher voucher = new Voucher(company, valueInEurCt);
        voucherList.add(voucher);
        return voucher;
    }

    public Voucher deleteVoucher(Voucher voucher) {
        voucherList.remove(voucher);
        return voucher;
    }
}
