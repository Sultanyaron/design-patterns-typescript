import { User } from "./models/User";
import { Company } from "./models/Company";
import { Map } from "./services/map/Map";

const user = new User();
const company = new Company();

const map = new Map("map");

map.addUserMaker(user);

map.addCompanyMarker(company);
