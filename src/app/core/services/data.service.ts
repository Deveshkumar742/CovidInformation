import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private covidURL = 'https://api.covid19india.org/state_district_wise.json';

    constructor(private http: HttpClient) { }

    getStateData(): Observable<any> {
        return this.http.get<any>(this.covidURL).pipe(
            tap(data => console.log("All: " + (""))
            ));
    }
}