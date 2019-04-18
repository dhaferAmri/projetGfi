import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule
  ],
  exports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule
  ]
})
export class MaterialModule { }
