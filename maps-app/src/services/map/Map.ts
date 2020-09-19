import { User } from "../../models/User";
import { Company } from "../../models/Company";

export class Map {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMaker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: user.location,
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: company.location,
    });
  }
}
