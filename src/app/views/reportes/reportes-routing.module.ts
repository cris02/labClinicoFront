import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EjComponent } from './ej/ej.component';



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
        path: 'ej',
        component: EjComponent,
        data: {
          title: 'Ejemplo',
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

