import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  constructor(private http: HttpClient) { }

  getFood(searchTerm: string): Observable<any> {
    if (searchTerm) {
    let apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${searchTerm}`;
    let apiKey = 'L80KpmzaMd1lOPK8WwXzRA==XVIvaAfVwz8jTPC3';

    const headers = new HttpHeaders().set('X-Api-Key', apiKey);
    
    return this.http.get<any>(apiUrl, { headers });
    }
    return of(null);
  }
}
