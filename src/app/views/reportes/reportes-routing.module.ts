import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReportesGeneralesComponent } from './reportesGenerales/reportesGenerales.component';
import { ReportesEpidemiologicosComponent } from './reportesEpidemiologicos/reportesEpidemiologicos.component';


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
          title: 'Reporte Epidemiologicos',
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

