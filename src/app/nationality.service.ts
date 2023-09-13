import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {
  private apiUrl = 'https://api.nationalize.io?name=';
  constructor(private http: HttpClient) { }
  predictNationality(name: string): Observable<any> {
    return this.http.get(this.apiUrl+ name);
  }
}
