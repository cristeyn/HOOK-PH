import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Payment } from '../_models/payment';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class PaymentService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<Payment>(`${environment.webApiUrl}payment/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByID(filter: string){
        return this.http.get<Payment>(`${environment.webApiUrl}payment/view-by-id.php?filter=${filter}`);
    }
    save(data:Payment){
    return this.http.post(`${environment.webApiUrl}payment/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:Payment){
    return this.http.post(`${environment.webApiUrl}payment/update.php`, data).pipe(map(response => {return response;}));
    }
}