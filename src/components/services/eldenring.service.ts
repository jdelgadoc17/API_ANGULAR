import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable ({
    providedIn: 'root'
})

export class eldenringService{
    private apiURL ="https://eldenring.fanapis.com/api/bosses"; //URL

    constructor (private http: HttpClient) {

    }

    getEldenRingData(): Observable<any> {
        return this.http.get<any[]>(this.apiURL);
    }

}


