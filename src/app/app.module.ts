import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCollaborateursComponent } from './list-collaborateurs/list-collaborateurs.component';
import { CollaborateurFormComponent } from './list-collaborateurs/collaborateur-form/collaborateur-form.component';
import {CollaborateurService} from './shared/services/collaborateur.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListCollaborateursComponent,
    CollaborateurFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [CollaborateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
