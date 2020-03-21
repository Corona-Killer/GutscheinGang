package gang.gutscheingang.validators;

import gang.gutscheingang.models.Sector;

public class SectorValidator {

    public static boolean validate(Sector sector) {
        return sector.getName() != null && sector.getName().length() >= 1;
    }
}
