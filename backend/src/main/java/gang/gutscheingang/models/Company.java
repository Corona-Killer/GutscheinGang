package gang.gutscheingang.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.jpa.spi.IdentifierGeneratorStrategyProvider;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.net.URL;
import java.util.*;

@Entity
public class Company {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID uuid;

    @NotNull
    @Size(min = 1)
    private String name;

    @NotNull
    @Size(min = 1)
    private String description;

    @ManyToOne
    @NotNull
    @Valid
    private Sector sector;

    private URL logoUrl;

    private URL wallpaperUrl;

    private URL homepage;

    private URL facebookUrl;

    private URL twitterUrl;

    private URL instagramUrl;

    @OneToOne
    @JsonIgnore
    private SystemUser adminstrator;


    @ElementCollection
    private List<URL> imageList;

    @ElementCollection
    private List<String> tags;

    @OneToMany
    @JsonIgnore
    @Null
    private List<Voucher> voucherList;

    private String needHelpBecause;

    @NotNull
    @Email
    private String paypalAddress;

    @NotNull
    @Size(min = 1)
    private String street;

    @NotNull
    @Min(10000)
    private int postalCode;

    @NotNull
    @Size(min = 1)
    private String city;

    public void updateWith(Company company) {
        this.name = company.name;
        this.description = company.description;
        this.logoUrl = company.logoUrl;
        this.sector = company.sector;
        this.homepage = company.homepage;
        this.facebookUrl = company.facebookUrl;
        this.twitterUrl = company.twitterUrl;
        this.instagramUrl = company.instagramUrl;
        this.imageList = company.imageList;
        this.tags = company.tags;
        this.needHelpBecause = company.needHelpBecause;
        this.paypalAddress = company.paypalAddress;
        this.street = company.street;
        this.postalCode = company.postalCode;
        this.city = company.city;
        this.setTags();
    }

    public void setSector(Sector sector) {
        this.sector = sector;
    }

    public List<Voucher> getVoucherList() {
        return voucherList;
    }

    public UUID getUuid() {
        return uuid;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Sector getSector() {
        return sector;
    }

    public URL getLogoUrl() {
        return logoUrl;
    }

    public URL getWallpaperUrl() {
        return wallpaperUrl;
    }

    public URL getHomepage() {
        return homepage;
    }

    public URL getFacebookUrl() {
        return facebookUrl;
    }

    public URL getTwitterUrl() {
        return twitterUrl;
    }

    public URL getInstagramUrl() {
        return instagramUrl;
    }

    public List<URL> getImageList() {
        return imageList;
    }

    public List<String> getTags() {
        return tags;
    }

    public String getNeedHelpBecause() {
        return needHelpBecause;
    }

    public String getPaypalAddress() {
        return paypalAddress;
    }

    public String getStreet() {
        return street;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setTags() {
        if (tags == null) tags = new ArrayList<>();
        tags.clear();
        tags.add(name);
        tags.add(description);
        tags.add(sector.toString());
        tags.add(String.valueOf(postalCode));
        tags.add(city);
    }
}
