export class RealEstateProperty {
  public id: number;
  public address?: PropertyAddress;
  public imgMain?: string;
  public photos?: PropertyPhotos[];
  public description: string;
  public features?: PropertyFeatures;
  public propertyType: string ;
  public price: number;
  public currency: Currency['USD' | 'ZAR' | 'ZD'];
  public numberOfBedRooms: number;
  public marketInfo?: SalesProperty ;
  public rentalInfo?: RentalProperty ;
  public amenities?: PropertyAmenities[];
  public listingMeta: ListingMeta;
  constructor(Id: number, address: PropertyAddress, mainPicture: string, photos: PropertyPhotos[],
              desc: string, features: PropertyFeatures, type: string, price: number,
              noOfBeds: number, sales: SalesProperty, rentals: RentalProperty, amenities: PropertyAmenities[],
              currency: Currency['USD' | 'ZAR' | 'ZD'], meta: ListingMeta) {
   this.id = Id;
   this.address = address;
   this.imgMain = mainPicture;
   this.photos = photos;
   this.description = desc;
   this.features = features;
   this.propertyType = type;
   this.price = price;
   this.numberOfBedRooms = noOfBeds;
   this.marketInfo = sales;
   this.rentalInfo = rentals;
   this.amenities = amenities;
   this.currency = currency;
   this.listingMeta = meta;
  }
}
export class ListingMeta {
  public dateListed: string;
  public datesUpdated: [];
  constructor(listed: string, updated: []) {
    this.dateListed = listed;
    this.datesUpdated = updated;
  }
}
export class Currency{
  public USD?: string;
  public ZAR?: string;
  public ZD?: string;
  constructor(usd: string, rand: string, zimBond: string){
    this.USD = usd;
    this.ZD = zimBond;
    this.ZAR = rand;
  }
}
export class RentalProperty {
  public rentPerMonth: number;
  public minimumTerm: number;
  constructor(rent: number, term: number) {
    this.rentPerMonth = rent;
    this.minimumTerm = term;
  }
}
export class SalesProperty {
  public marketValue: number;
  public typeOfDeed: string;
  constructor(price: number, deed: string) {
    this.marketValue = price;
    this.typeOfDeed = deed;
  }
}
export class PropertyFeatures{
  public age: number;
  public acreage: number;
  public lounges: number;
  public bathrooms: number;
  public borehole: boolean;
  public solarPanels: boolean;
  public security: string[];
  constructor(age: number, size: number, noOfLounges: number, noOfBathrooms: number,
              hasBorehole: boolean, fittedSolarPanels: boolean, securityFeatures: [] ) {
   this.age = age;
   this.acreage = size;
   this.lounges = noOfLounges;
   this.bathrooms = noOfBathrooms;
   this.borehole = hasBorehole;
   this.solarPanels = fittedSolarPanels;
   this.security = securityFeatures;
  }
}
export class PropertyPhotos {
  public id: number;
  public url: string;
  public isMain: boolean;
  constructor(id: number, url: string, mainPic: boolean) {
    this.id = id;
    this.url = url;
    this.isMain = mainPic;
  }
}
export class PropertyAddress {
  public doorNumber: number;
  public buildingName?: string;
  public street: string;
  public town: string;
  public city: string;
  public province: string;
  public location: Location;
  constructor(no: number, name: string, road: string, locale: string, city: string, province: string, location: Location) {
    this.doorNumber = no;
    this.buildingName = name;
    this.street = road;
    this.town = locale;
    this.city = city;
    this.province = province;
    this.location = location;
  }
}
export class Location{
  public long: number;
  public lat: number;
  constructor(longitude: number, latitude: number) {
    this.long = longitude;
    this.lat = latitude;
  }
}
export class PropertyAmenities {
  public schools?: Schools[];
  public store?: Shopping[];
  public hospital?: Hospitals[];
  public gym?: Gyms[];
  constructor(schools: Schools[], shops: Shopping[], hospitals: Hospitals[], gyms: Gyms[]) {
    this.schools = schools;
    this.store = shops;
    this.hospital = hospitals;
    this.gym = gyms;
  }
}
export class Amenity{
  public name: string;
  public distance: number;
  public website?: string;
  public contactNo?: number;
  constructor(name: string, distance: number, website: string, contact: number) {
    this.name = name;
    this.distance = distance;
    this.website =  website;
    this.contactNo = contact;
  }
}
export class Schools {
  public school: Amenity;
}
export class Shopping {
  public shop: Amenity;
}
export class Hospitals{
  public hospital: Amenity;
}
export class Gyms {
  public gym: Amenity;
}
