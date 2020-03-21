package gang.gutscheingang.models;

import javax.validation.constraints.NotNull;
import java.util.UUID;

public class VoucherBuyTransaction {

    @NotNull
    private UUID userUuid;

    @NotNull
    private UUID companyUuid;

    @NotNull
    private int valueInEurCt;

    public UUID getUserUuid() {
        return userUuid;
    }

    public UUID getCompanyUuid() {
        return companyUuid;
    }

    public int getValueInEurCt() {
        return valueInEurCt;
    }
}
