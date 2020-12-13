import {Component, Input, OnInit} from '@angular/core';
import {Repas} from '../model/repas';

@Component({
  selector: 'app-repas-start',
  templateUrl: './repas-start.component.html',
  styleUrls: ['./repas-start.component.css']
})
export class RepasStartComponent implements OnInit {

  @Input() repas: Repas;
  @Input() repasId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
