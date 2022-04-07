import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { OrderPackage } from '../_models/order-package';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class OrderPackageService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<OrderPackage>(`${environment.webApiUrl}order-package/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByStatus(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<OrderPackage>(`${environment.webApiUrl}order-package/view-by-status.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    save(data:OrderPackage){
    return this.http.post(`${environment.webApiUrl}order-package/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:OrderPackage){
    return this.http.post(`${environment.webApiUrl}order-package/update.php`, data).pipe(map(response => {return response;}));
    }
    cancel(id: string){
        return this.http.post(`${environment.webApiUrl}order-package/cancel.php`, {ID: id}).pipe(map(response => {return response;}));
        }
}