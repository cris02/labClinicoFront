import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ClinicaComponent } from './clinica/clinica.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { PaisComponent } from './pais/pais.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';
import { PaisFormUpdateComponent } from './componentes/pais-form-update/pais-form-update.component';



@NgModule({
  declarations: [
    ClinicaComponent,
    PaisComponent,
    FilterPipe,
    PaisFormComponent,
    PaisFormUpdateComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    PrimeNgModule,
    NgxPaginationModule,
    FormsModule
  ]
})

export class CatalogosModule { }
