import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingService {
  constructor(private http: HttpClient) {}

  getJSON(path: string): Observable<any> {
    return this.http.get(path);
  }
}
