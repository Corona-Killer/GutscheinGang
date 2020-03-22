package gang.gutscheingang.validators;

import gang.gutscheingang.models.Voucher;

public class VoucherValidator {

    public static boolean validate(Voucher voucher) {

            if (voucher.getCompany() == null || voucher.getCompany().getUuid() == null) return false;
            if (voucher.getDefaultValueInEurCt() <= 0) return false;
            if (voucher.getUuid() != null) return false;
            if (voucher.getVoucherId() != null) return false;

            return true;

    }
}
