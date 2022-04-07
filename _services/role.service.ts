import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../_models/role';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RoleModule } from '../_models/role-module';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { }
  save(data:Role){
    return this.http.post(`${environment.webApiUrl}role/save.php`, data).pipe(map(response => {return response;}));
  }
  update(data:Role){
    return this.http.post(`${environment.webApiUrl}role/update.php`, data).pipe(map(response => {return response;}));
  }
  viewDropdown(){
    return this.http.get<Role[]>(`${environment.webApiUrl}role/view-dropdown.php`);
  }
  view(pageLimit: number, currentPage: number, filter: string){
    return this.http.get(`${environment.webApiUrl}role/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`);
  }
  viewByID(roleID: string){
    return this.http.get<Role>(`${environment.webApiUrl}role/view-by-id.php?filter=${roleID}`);
  }
  viewRoleModule(roleID: string){
    return this.http.get<RoleModule[]>(`${environment.webApiUrl}role/view-role-module.php?filter=${roleID}`);
  }
  saveRoleModule(data: {RoleID: string, Modules: number[]}){
    return this.http.post(`${environment.webApiUrl}role/save-role-module.php`, data).pipe(map(response => {return response;}));
  }
}
