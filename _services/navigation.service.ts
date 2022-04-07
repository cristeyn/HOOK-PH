import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";




@Injectable({ providedIn: 'root' })
export class NavigationService {
    private history: string[] = [];
    constructor(
        private router: Router, private location: Location
    ) { }
    public captureHistory():void{
        this.router.events.subscribe(e=>{
            if(e instanceof NavigationEnd){
                this.history.push(e.urlAfterRedirects);
            }
        })
    }

    public back():void{
        this.history.pop();
        if(this.history.length>0){
            this.location.back();
        }else{
            this.router.navigateByUrl("/");
        }
    }
}