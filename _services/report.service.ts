import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { ReportWeekly } from 'src/_models/report.weekly';
import { Payment } from 'src/_models/payment';



@Injectable({ providedIn: 'root' })
export class ReportService {
    constructor(private http: HttpClient) { }
    pipe = new DatePipe('en-US');
    weekly(startDate: Date, endDate: Date){
         // Use your own locale
        //console.log(`${environment.webApiUrl}report/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`)
        const StartDate = this.pipe.transform(startDate, 'yyyy-MM-dd');
        const EndDate = this.pipe.transform(endDate, 'yyyy-MM-dd');
        return this.http.get<ReportWeekly>(`${environment.webApiUrl}report/weekly.php?StartDate=${StartDate}&EndDate=${EndDate}`);
    }
    daily(startDate: Date, endDate: Date){
        // Use your own locale
       //console.log(`${environment.webApiUrl}report/view.php?pageLimit=${pageLimit}&currentPage=${currentPage}&filter=${filter}`)
       const StartDate = this.pipe.transform(startDate, 'yyyy-MM-dd');
       const EndDate = this.pipe.transform(endDate, 'yyyy-MM-dd');
       return this.http.get<Payment>(`${environment.webApiUrl}report/daily.php?StartDate=${StartDate}&EndDate=${EndDate}`);
   }
}