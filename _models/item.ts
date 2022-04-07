import { Variation } from "./variation";

export class Item{
    ID?: string;
    Item?: string;
    Description?: string;
    WithVariants?: Boolean;
    Availability?: Boolean;
    Price?: number;
    Variation?: Variation[];
    ServiceID?: string;
    Service?: string;
    SelectedVariation?: Variation;
}