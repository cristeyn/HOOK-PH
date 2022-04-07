import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Package } from '../_models/package';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class PackageService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<Package>(`${environment.webApiUrl}package/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByID(filter: string){
        return this.http.get<Package>(`${environment.webApiUrl}package/view-by-id.php?filter=${filter}`);
    }
    viewListing(pageLimit: number, currentPage: number, filter: string, seriecID: string){
        //console.log(`${environment.webApiUrl}package/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}&serviceID=${seriecID}`)
        return this.http.get<Package>(`${environment.webApiUrl}package/view-listing.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}&serviceID=${seriecID}`);
        
    }
    save(data:Package){
    return this.http.post(`${environment.webApiUrl}package/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:Package){
    return this.http.post(`${environment.webApiUrl}package/update.php`, data).pipe(map(response => {return response;}));
    }
}