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
    private String voucherId;

    private boolean isUsed;

    public void setUsed(boolean usedSate) {
        this.isUsed = usedSate;
    }

    public void subtractValueInEurCt(int valueToSubtract) {
        int temp = this.valueInEurCt - valueToSubtract;
        if(temp < 0) {
            throw new IllegalArgumentException();
        }
        this.valueInEurCt = temp;
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
}
