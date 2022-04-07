import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.webApiUrl}user-backend/view.php`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.webApiUrl}user-backend/view.php?id=${id}`);
    }
    view(pageLimit: number, currentPage: number, filter: string){
        return this.http.get<User>(`${environment.webApiUrl}user-backend/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
    }
    save(data:User){
    return this.http.post(`${environment.webApiUrl}user-backend/add.php`, data).pipe(map(response => {return response;}));
    }
    update(data:User){
    return this.http.post(`${environment.webApiUrl}user-backend/update.php`, data).pipe(map(response => {return response;}));
    }
}