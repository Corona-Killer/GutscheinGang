package gang.gutscheingang.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

    private int valueInEurCt;

    /**
     * The voucher ID that is presented to the company employee that has 8 characters.
     */
    private String voucherId;

    private boolean isUsed;

    public int getValueInEurCt() {
        return valueInEurCt;
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
