import { Injectable } from '@angular/core';
import {Collaborateur} from '../model/collaborateur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

   collaborateurs: Collaborateur[] = [];

  constructor(private http: HttpClient) {

  }

   getCollaborateurs(): Observable<any> {
    return this.http.get(API_URL.COLLABORATEUR_URL) ;
   }
}
