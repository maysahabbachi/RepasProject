import { Component, OnInit } from '@angular/core';
import {Repas} from '../model/repas';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RepasDetailsService} from '../shared/repas-details.service';
import {RepasDetails} from '../model/repas-Details';

@Component({
  selector: 'app-repas-details',
  templateUrl: './repas-details.component.html',
  styleUrls: ['./repas-details.component.css']
})
export class RepasDetailsComponent implements OnInit {

  reppp: RepasDetails [] = [];
  private repasIndex: number;
  private subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bs: RepasDetailsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.repasIndex = params["idRep"];

        this.bs.getRepasDetails(this.repasIndex).subscribe((data) => this.reppp = data , (error) => console.log(error));
        console.log(this.reppp[1]);
      }
    );
  }

}
