import { Item } from "./item";

export class OrderPackage{
    ID?: string;
    Client?: string;
    ClientContactNo?: string;
    ContactPerson?: string;
    ContactPersonNo?: string;
    DeliveryDateTime?: Date;
    Destination?: string;
    Landmark?: string;
    Receiver?: string;
    Celebration?: string;
    Message?: string;
    PackageID?: string;
    PackageTotal?: number;
    SelectedAddOn?: Item[];
    PaymentStatus?: string;
    TxnTimeStamp?: Date;
    TxnStatus?: string;
    UserUID?: string;
    Package?: string;
    Service?: string;
    RiderID?: string;
    Rider?: string;
    Rating?: number;
    Comment?: string;
}