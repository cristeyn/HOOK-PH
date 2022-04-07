import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../_models/service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  save(data:Service){
    return this.http.post(`${environment.webApiUrl}service/save.php`, data).pipe(map(response => {return response;}));
  }
  update(data:Service){
    return this.http.post(`${environment.webApiUrl}service/update.php`, data).pipe(map(response => {return response;}));
  } 
  viewDropdown(){
    return this.http.get<Service[]>(`${environment.webApiUrl}service/view-dropdown.php`);
  }
  view(pageLimit: number, currentPage: number, filter: string){
    return this.http.get(`${environment.webApiUrl}service/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
  }
  viewByID(serviceID: string){
    //console.log(`${environment.webApiUrl}service/view-by-id.php?filter=${serviceID}`);
    return this.http.get<Service>(`${environment.webApiUrl}service/view-by-id.php?filter=${serviceID}`);
  }

}
