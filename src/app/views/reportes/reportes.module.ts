import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

// views
import { ReportesGeneralesComponent } from './reportesGenerales/reportesGenerales.component';
import { ReportesEpidemiologicosComponent} from './reportesEpidemiologicos/base/reportesEpidemiologicos.component'

// Components Routing
import { ReportesRoutingModule } from './reportes-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrigliceridosComponent } from './reportesEpidemiologicos/trigliceridos/trigliceridos.component';
import { TipeoComponent } from './reportesEpidemiologicos/tipeo/tipeo.component';
import { ExamenesPorAreaComponent } from './reportesEstadisticos/examenes-por-area/examenes-por-area.component';
import { TiposDeExamenesComponent } from './reportesEstadisticos/tipos-de-examenes/tipos-de-examenes.component';
import { ExamenesPorFechaComponent } from './reportesEstadisticos/examenes-por-fecha/examenes-por-fecha.component';
import { ExamenesZonaGeograficaComponent } from './reportesEstadisticos/examenes-zona-geografica/examenes-zona-geografica.component';
import { ReportesEstadisticosComponent } from './reportesEstadisticos/reportesEstadisticos/reportesEstadisticos.component';


@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  declarations: [
    ReportesGeneralesComponent,
    ReportesEpidemiologicosComponent,
    TrigliceridosComponent,
    TipeoComponent,
    ExamenesPorAreaComponent,
    TiposDeExamenesComponent,
    ExamenesPorFechaComponent,
    ExamenesZonaGeograficaComponent,
    ReportesEstadisticosComponent,


  ],
})
export class ReportesModule {}
