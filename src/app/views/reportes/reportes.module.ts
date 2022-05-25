import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// views
import { ReportesGeneralesComponent } from './reportesGenerales/reportesGenerales.component';

// Components Routing
import { ReportesRoutingModule } from './reportes-routing.module';
import { ReporteGComponent } from './reporteG/reporteG.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ReportesGeneralesComponent,
    ReporteGComponent,

  ],
})
export class ReportesModule {}
