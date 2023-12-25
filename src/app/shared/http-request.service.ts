import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  baseUrl: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'doctors')
  }
}
