import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  url: string = 'https://reqres.in/api/productos?page=1';

  constructor(private http: HttpClient) {}

  getColores(): Observable<any>{

    return this.http.get<any>(this.url);

  }
}
