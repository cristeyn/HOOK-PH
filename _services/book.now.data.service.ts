import { Injectable } from '@angular/core';
import { Item } from 'src/_models/item';
import { OrderPackage } from 'src/_models/order-package';
import { Package } from 'src/_models/package';

@Injectable({
  providedIn: 'root'
})
export class BookNowDataService {
  private addOn?: Item[];
  private package?: Package;
  private orderPackage?: OrderPackage | null;
  constructor() { }
  get AddOn(): Item[]{
    return <Item[]>this.addOn;
  }
  set AddOn(addOn: Item[]){
    this.addOn = addOn;
  }

  public get Package() : Package {
    return <Package>this.package;
  }
  
  public set Package(v : Package) {
    this.package = v;
  }
  public get OrderPackage() : OrderPackage | null {
    return <OrderPackage>this.orderPackage;
  }
  
  public set OrderPackage(v: OrderPackage | null) {
    this.orderPackage = v;
  }
  
}
