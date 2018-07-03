import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductAPi(url) {
    return this.http.get(url);
  }

}