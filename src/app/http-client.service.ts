import { Injectable } from '@angular/core';
import { BlogPage } from './page';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = '/assets/';

  constructor(
    private http: HttpClient
  ) { }

  getPage(filePath: string) {
    return this.http.get<BlogPage>(this.baseUrl + filePath);
  }
}
