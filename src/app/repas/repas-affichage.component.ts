import { Component, OnInit } from '@angular/core';
import {Repas} from '../model/repas';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {RepasService} from '../shared/repas.service';

@Component({
  selector: 'app-repas-affichage',
  templateUrl: './repas-affichage.component.html',
  styleUrls: ['./repas-affichage.component.css']
})
export class RepasAffichageComponent implements OnInit {

  public repasFound: Repas [] ;
  private specIndex: number;
  private subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rs: RepasService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.specIndex = + params["idSpec"];
        this.rs.getRepas(this.specIndex).subscribe(next => this.repasFound = next);

      }
    );
  }

}
