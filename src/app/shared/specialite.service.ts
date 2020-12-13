import { Injectable } from '@angular/core';
import {Specialite} from '../model/specialite';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  constructor(private http: HttpClient) {}
  getSpecialite(): Observable<Specialite[]>{
    return this.http.get<Specialite[]>('http://localhost:3000/specialite/');
  }
}
