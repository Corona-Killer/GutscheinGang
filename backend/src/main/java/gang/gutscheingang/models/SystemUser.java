package gang.gutscheingang.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String email;

    @OneToMany
    @Null
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

    private String jwtToken;

    public void updateWith(SystemUser systemUser) {
        this.email = systemUser.email;
        this.voucherList = systemUser.voucherList;
        this.firstName = systemUser.firstName;
        this.lastName = systemUser.lastName;
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

    public Voucher buyVoucher(Company company, int valueInEurCt) {
        Voucher voucher = new Voucher(company, valueInEurCt);
        voucherList.add(voucher);
        return voucher;
    }
}
