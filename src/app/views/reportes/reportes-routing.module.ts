import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReportesGeneralesComponent } from './reportesGenerales/reportesGenerales.component';
import { ReporteGComponent } from './reporteG/reporteG.component';


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
          title: 'Ejemplo',
        },
      },
      {
        path: 'reporteg:id',
        component: ReporteGComponent,
        data: {
          title: 'Reporte General',
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

