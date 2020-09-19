import faker from "faker";

export class User {
  name: string;
  location: google.maps.LatLngLiteral;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
