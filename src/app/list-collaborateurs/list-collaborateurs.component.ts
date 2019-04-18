import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from '../shared/services/collaborateur.service';
import {Collaborateur} from '../shared/model/collaborateur.model';

@Component({
  selector: 'app-list-collaborateurs',
  templateUrl: './list-collaborateurs.component.html',
  styleUrls: ['./list-collaborateurs.component.css']
})
export class ListCollaborateursComponent implements OnInit {

  colls: Collaborateur[];

  constructor(private serviceCol: CollaborateurService) { }

  ngOnInit() {
    this.loadCollaborateur();
  }

  loadCollaborateur() {
    this.serviceCol.getCollaborateurs().subscribe(
      data => {this.colls = data; },
      error => {console.log(error); }
    );
  }

}
