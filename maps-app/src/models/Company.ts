import faker from "faker";
import { Mappable } from "../services/map/Map";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: google.maps.LatLngLiteral;
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    };
    this.color = faker.commerce.color();
  }

  markerContent() {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1> 
      <h3>${this.catchPhrase}</h3>
    </div>
    `;
  }
}
