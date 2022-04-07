import { Item } from "./item";

export class Package{
    ID?: string;
    Package?: string;
    Availability?: Boolean;
    Price?: number;
    Inclusion?: Item[];
    AddOn?: Item[];
    ServiceID?: string;
    Service?: string;
}