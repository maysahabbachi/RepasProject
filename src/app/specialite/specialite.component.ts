import { Component, OnInit } from '@angular/core';
import {SpecialiteService} from '../shared/specialite.service';
import {Specialite} from '../model/specialite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
