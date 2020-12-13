import { Component, OnInit } from '@angular/core';
import {Specialite} from '../model/specialite';
import {SpecialiteService} from '../shared/specialite.service';

@Component({
  selector: 'app-specialite-affichage',
  templateUrl: './specialite-affichage.component.html',
  styleUrls: ['./specialite-affichage.component.css']
})
export class SpecialiteAffichageComponent implements OnInit {

  specialite: Specialite[];
  constructor(private ss: SpecialiteService) { }

  ngOnInit(): void {
    this.ss.getSpecialite().subscribe(next => this.specialite = next);
  }

}
