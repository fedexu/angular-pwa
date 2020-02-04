import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../shared/services/favorites-data.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  private readonly dataURL = "https://www.techiediaries.com/api/data.json";

  constructor(
    private readonly http: HttpClient
  ) { }

  getData(): Observable<Array<Item>> {
    return <Observable<Array<Item>>>this.http.get(this.dataURL);
  }

}

