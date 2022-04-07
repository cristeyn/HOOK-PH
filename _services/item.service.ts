import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Item } from '../_models/item';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class ItemService {
    constructor(private http: HttpClient) { }
    view(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<Item>(`${environment.webApiUrl}item/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    viewByService(pageLimit: number, currentPage: number, filter: string, serviceID: string){
        return this.http.get<Item>(`${environment.webApiUrl}item/view-by-service.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}&serviceID=${serviceID}`);
    }
    save(data:Item){
    return this.http.post(`${environment.webApiUrl}item/save.php`, data).pipe(map(response => {return response;}));
    }
    update(data:Item){
    return this.http.post(`${environment.webApiUrl}item/update.php`, data).pipe(map(response => {return response;}));
    }
}