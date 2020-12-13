import { Injectable } from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  allReclam: Reclamation[];
  mockUrl: string = 'http://localhost:3000/Reclamation';

  currentRec: Reclamation = {
    email: '',
    objet: '',
    description: '',
    id: null,
  }

  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  getAll() {
    this.ngxSpinnerService.show();
    return this.http.get<Reclamation[]>(this.mockUrl).subscribe(
      (data: Reclamation[]) => {
        this.allReclam = data;
        console.table(this.allReclam);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  delete(id: number): Observable<Reclamation> {
    return this.http.delete<Reclamation>(this.mockUrl + '/' + id);
  }

  create(rec: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.mockUrl, rec);
  }

  update(rec: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.mockUrl + '/' + rec.id, rec);
  }
}
