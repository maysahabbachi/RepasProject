import {Component, Input, OnInit} from '@angular/core';
import {Specialite} from '../model/specialite';
import {SpecialiteService} from '../shared/specialite.service';

@Component({
  selector: 'app-specialite-start',
  templateUrl: './specialite-start.component.html',
  styleUrls: ['./specialite-start.component.css']
})
export class SpecialiteStartComponent implements OnInit {

  @Input() specialite: Specialite;
  @Input() specialiteId: number;
  constructor() { }

  ngOnInit(): void {
  }

}
