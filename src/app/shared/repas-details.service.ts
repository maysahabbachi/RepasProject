import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repas} from '../model/repas';
import {RepasDetails} from '../model/repas-Details';

@Injectable({
  providedIn: 'root'
})
export class RepasDetailsService {
  constructor(private http: HttpClient) {}
  getRepasDetails(id: number): Observable<RepasDetails[]>{
    return this.http.get<RepasDetails[]>('http://localhost:3000/repasDetails?repasId=' + id);
  }
  getAllRepas(): Observable<RepasDetails[]>{
    return this.http.get<RepasDetails[]>('http://localhost:3000/repasDetails');
  }
}
