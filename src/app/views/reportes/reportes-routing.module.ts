import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReportesGeneralesComponent } from './reportesGenerales/reportesGenerales.component';
import { ReportesEpidemiologicosComponent } from './reportesEpidemiologicos/base/reportesEpidemiologicos.component';
import {TrigliceridosComponent} from './reportesEpidemiologicos/trigliceridos/trigliceridos.component';
import {TipeoComponent} from './reportesEpidemiologicos/tipeo/tipeo.component';
import {ReportesEstadisticosComponent} from './reportesEstadisticos/reportesEstadisticos/reportesEstadisticos.component';
import {ExamenesPorAreaComponent} from './reportesEstadisticos/examenes-por-area/examenes-por-area.component';
import {ExamenesPorFechaComponent} from './reportesEstadisticos/examenes-por-fecha/examenes-por-fecha.component';
import {ExamenesZonaGeograficaComponent} from './reportesEstadisticos/examenes-zona-geografica/examenes-zona-geografica.component';
import {TiposDeExamenesComponent} from './reportesEstadisticos/tipos-de-examenes/tipos-de-examenes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reportes',
    },
    children: [
      {
        path: '',
        redirectTo: 'reportes',
      },
      {
        path: 'reportesGenerales',
        component: ReportesGeneralesComponent,
        data: {
          title: 'Reportes Generales',
        },
      },
      {
        path: 'reportesEpidemiologicos',
        component: ReportesEpidemiologicosComponent,
        data: {
          title: 'Reportes Epidemiologicos',
        },
      },
      {
        path: 'reportesEpidemiologicos/trigliceridos',
        component: TrigliceridosComponent,
        data: {
          title: 'Reporte Trigliceridos Altos',
        },
      },
      {
        path: 'reportesEpidemiologicos/tipeo',
        component: TipeoComponent,
        data: {
          title: 'Reporte Tipeo Sanguineo',
        },
      },
      {
        path: 'reportesEstadisticos',
        component: ReportesEstadisticosComponent,
        data: {
          title: 'Reportes Estadisticos',
        },
      },
      {
        path: 'reportesEstadisticos/examenesPorArea',
        component: ExamenesPorAreaComponent,
        data: {
          title: 'Reporte Examenes por Area',
        },
      },
      {
        path: 'reportesEstadisticos/examenesPorFecha',
        component: ExamenesPorFechaComponent,
        data: {
          title: 'Reporte Examenes por Fecha',
        },
      },
      {
        path: 'reportesEstadisticos/examenesPorZonaGeografica',
        component: ExamenesZonaGeograficaComponent,
        data: {
          title: 'Reporte Examenes por Zona Geografica',
        },
      },
      {
        path: 'reportesEstadisticos/tiposDeExamenesRealizados',
        component: TiposDeExamenesComponent,
        data: {
          title: 'Reporte Examenes por Tipo',
        },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}

