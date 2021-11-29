import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Medicines} from "./Medicines";

@Injectable()
export class ApiService {
  apiurl = 'http://localhost:8762/';



  constructor(private http: HttpClient) {
  }


  getBreeds(): Observable<any> {
    return this.http.get<Medicines[]>(`${this.apiurl}medicines`);
  }
}
