package gang.gutscheingang.models;

import java.util.UUID;

public class VoucherBuyTransaction {
    private UUID userUuid;
    private UUID companyUuid;
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
