import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Rate } from '../_models/rate';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class RateService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        //console.log(`${environment.webApiUrl}rate/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`)
        return this.http.get<Rate>(`${environment.webApiUrl}rate/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByService(pageLimit: number, currentPage: number, filter: string, serviceID: string){
        return this.http.get<Rate>(`${environment.webApiUrl}rate/view-by-service.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}&serviceID=${serviceID}`);
    }
    save(data:Rate){
    return this.http.post(`${environment.webApiUrl}rate/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:Rate){
    return this.http.post(`${environment.webApiUrl}rate/update.php`, data).pipe(map(response => {return response;}));
    }
}