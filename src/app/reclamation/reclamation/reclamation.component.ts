import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../../shared/reclamation.service';
import {Reclamation} from '../../model/reclamation';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(
    public rs: ReclamationService,
    public toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }


  createOrUpdateReclamation(currentRec: Reclamation) {
    if (currentRec.id === null) {
      this.createRec(currentRec);
    } else {
      this.updateRec(currentRec);
    }
  }

  createRec(emp: Reclamation) {
    this.rs.create(emp).subscribe(
      (result: Reclamation) => {
        this.rs.getAll();
        this.toastrService.success('Reclamtion ajoute  !', 'Reclamation CRUD');
        this.clear();
      });
  }

  updateRec(emp: Reclamation) {
    this.rs.update(emp).subscribe(
      (result: Reclamation) => {
        this.rs.getAll();
        this.toastrService.info('Reclamation modifie  !', 'Reclaamtion CRUD');
        this.clear();
      });
  }

  clear() {
    this.rs.currentRec = {
      id: null,
      email: '',
      objet: '',
      description: ''
    };
  }

}
