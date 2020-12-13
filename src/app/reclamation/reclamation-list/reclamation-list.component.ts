import {Component, OnInit} from '@angular/core';
import {ReclamationService} from '../../shared/reclamation.service';
import {Reclamation} from '../../model/reclamation';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {

  listReclamations: Reclamation[];


  constructor(
    public rs: ReclamationService,
    public toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllRec();
  }

  getAllRec() {
    this.rs.getAll();
  }

  editRec(rec: Reclamation) {
    this.rs.currentRec = Object.assign({}, rec);
    this.toastrService.warning('reclamation modifie  !', 'reclamation CRUD');
  }

  deleteRec(id: number) {
    this.rs.delete(id).subscribe(
      (data) => {
        this.getAllRec();
        this.toastrService.error('reclamation supprime  !', 'reclamation CRUD');
      });
  }


}
