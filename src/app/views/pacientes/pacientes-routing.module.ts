import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registro de pacientes',
    },
    children: [
      {
        path: '',
        redirectTo: 'pacientes',
      },
      {
        path: 'pacientes',
        component: PacientesComponent,
        data: {
          title: 'Pacientes',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PacientesRoutingModule { }
