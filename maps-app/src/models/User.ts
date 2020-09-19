import faker from "faker";
import { Mappable } from "../services/map/Map";

export class User implements Mappable {
  name: string;
  location: google.maps.LatLngLiteral;
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = faker.commerce.color();
  }

  markerContent() {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
