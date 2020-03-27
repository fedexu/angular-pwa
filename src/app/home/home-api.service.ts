import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  private readonly dataURL = "http://localhost:9999/articles";

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(fetchPage): Observable<any> {
    return this.http.get(this.dataURL + '?page=' + fetchPage);
  }

}

