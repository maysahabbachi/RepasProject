import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Specialite} from '../model/specialite';
import {Repas} from '../model/repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  constructor(private http: HttpClient) {}
  getRepas(id: number): Observable<Repas[]>{
    return this.http.get<Repas[]>('http://localhost:3000/repas?specId=' + id);
  }
}
