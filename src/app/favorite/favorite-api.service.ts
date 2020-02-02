import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteApiService {

  constructor(
    private readonly http: HttpClient
    ) { }
}
