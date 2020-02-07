import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  private readonly dataURL = "https://www.techiediaries.com/api/data.json";

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get(this.dataURL);
  }

}

