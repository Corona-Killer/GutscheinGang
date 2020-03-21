package gang.gutscheingang.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.UUID;

/**
 * Defines a voucher object that has a value, an ID and a state.
 */
@Entity
public class Voucher {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID uuid;

    @OneToOne
    private Company company;

    private int valueInEurCt;

    private int defaultValueInEurCt;

    /**
     * The voucher ID that is presented to the company employee that has 8 characters.
     */
    @GeneratedValue
    private String voucherId;

    private boolean isUsed;

    public Voucher() {}

    public Voucher(Company company, int defaultValueInEurCt) {
        this.company = company;
        this.defaultValueInEurCt = defaultValueInEurCt;
        this.valueInEurCt = defaultValueInEurCt;
    }

    public void setUsed(boolean usedSate) {
        this.isUsed = usedSate;
    }

    public Company getCompany() {
        return company;
    }

    public int getValueInEurCt() {
        return valueInEurCt;
    }

    public int getDefaultValueInEurCt() {
        return defaultValueInEurCt;
    }

    public String getVoucherId() {
        return voucherId;
    }

    public UUID getUuid() {
        return uuid;
    }

    public boolean isUsed() {
        return isUsed;
    }

    /**
     * Use a voucher and subtract the used amount of money from the value.
     * @param valueToSubtract the value to subtract
     */
    public void subtractValueInEurCt(int valueToSubtract) {
        int temp = this.valueInEurCt - valueToSubtract;
        if(temp < 0) {
            throw new IllegalArgumentException();
        }
        this.valueInEurCt = temp;
    }
}
