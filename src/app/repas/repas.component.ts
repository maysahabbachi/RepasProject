import { Component, OnInit } from '@angular/core';
import {Repas} from '../model/repas';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {RepasService} from '../shared/repas.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit(): void {


  }

}
