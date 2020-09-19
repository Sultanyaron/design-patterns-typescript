import faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: google.maps.LatLngLiteral;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    };
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
