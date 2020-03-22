package gang.gutscheingang.validators;

import gang.gutscheingang.models.Company;

import java.net.URL;
import java.util.LinkedList;

public class CompanyValidator {

    public static boolean validate(Company company) {

            if (company.getName() == null || company.getName().length() < 1) return false;
            if (company.getPaypalAddress() == null || company.getPaypalAddress().length() < 1 ) return false;
            if (company.getStreet() == null || company.getStreet().length() < 1 ) return false;
            if (company.getCity() == null || company.getCity().length() < 1 ) return false;
            if (company.getPostalCode() < 10000) return false;
            if (company.getSector() == null || company.getSector().getName().length() < 1) return false;
            if (company.getVoucherList() != null && company.getVoucherList().size() > 0) return false;
            return true;

    }
}
