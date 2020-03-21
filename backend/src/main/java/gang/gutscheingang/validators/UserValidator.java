package gang.gutscheingang.validators;

import gang.gutscheingang.models.SystemUser;

public class UserValidator {

    public static boolean validate(SystemUser user) {
            if (user.getEmail() == null || user.getEmail().length() < 1) return false;
            if (user.getFirstName() == null || user.getFirstName().length() < 1) return false;
            if (user.getLastName() == null || user.getLastName().length() < 1) return false;
            if (user.getCompanyList() != null && user.getCompanyList().size() > 0) return false;
            if (user.getVoucherList() != null && user.getVoucherList().size() > 0) return false;
            return true;

    }
}
