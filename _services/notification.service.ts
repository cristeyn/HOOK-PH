import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Notification } from '../_models/notification';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        //console.log(`${environment.webApiUrl}notification/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`)
        return this.http.get<Notification>(`${environment.webApiUrl}notification/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByService(pageLimit: number, currentPage: number, filter: string, serviceID: string){
        return this.http.get<Notification>(`${environment.webApiUrl}notification/view-by-service.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}&serviceID=${serviceID}`);
    }
    save(data:Notification){
    return this.http.post(`${environment.webApiUrl}notification/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:Notification){
    return this.http.post(`${environment.webApiUrl}notification/update.php`, data).pipe(map(response => {return response;}));
    }
    viewByOrderPackageID(filter: string){
        return this.http.get<Notification[]>(`${environment.webApiUrl}notification/view-by-order-package-id.php?OrderPackageID=${filter}`);
    }
}