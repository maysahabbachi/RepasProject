import { Component, OnInit } from '@angular/core';
import {Repas} from '../../model/repas';
import {RepasService} from '../../shared/repas.service';
import {RepasDetailsService} from '../../shared/repas-details.service';
import {RepasDetails} from '../../model/repas-Details';

@Component({
  selector: 'app-filter-repas',
  templateUrl: './filter-repas.component.html',
  styleUrls: ['./filter-repas.component.css']
})
export class FilterRepasComponent implements OnInit {

  saerchName: string = '';
  list: RepasDetails[] = [];
  constructor(private repas: RepasDetailsService) { }

  ngOnInit(): void {
    this.repas.getAllRepas().subscribe((next) => this.list = next , (error) => console.log(error) );

  }

}
