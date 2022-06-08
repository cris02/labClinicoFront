import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ClinicaComponent } from './clinica/clinica.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ClinicaComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    PrimeNgModule
  ]
})

export class CatalogosModule { }
