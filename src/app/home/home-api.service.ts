import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  private readonly dataURL = (environment.production) ? environment.baseUrl + "/articles/articles"
    : "http://localhost:9999/articles";

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(fetchPage): Observable<any> {
    return this.http.get(`${this.dataURL}?page=${fetchPage}`);
  }

}

