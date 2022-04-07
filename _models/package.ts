import { Item } from "./item";
import { Rate } from "./rate";

export class Package{
    ID?: string;
    Package?: string;
    Availability?: Boolean;
    Price?: number;
    Inclusion?: Item[];
    AddOn?: Item[];
    ServiceID?: string;
    Service?: string;
    Rating?: number;
    Rate?: Rate[];
}