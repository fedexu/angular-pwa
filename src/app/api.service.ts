import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly dataURL = "https://www.techiediaries.com/api/data.json";

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(): Observable<Array<Item>> {
    return <Observable<Array<Item>>>this.http.get(this.dataURL);
  }

}

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}
