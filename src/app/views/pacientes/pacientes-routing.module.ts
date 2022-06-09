import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListadoPacientesComponent} from './listadoPacientes/listadoPacientes.component'
import {DetallePacienteComponent} from './detallePaciente/detallePaciente.component'
import {DetalleExamenHemComponent} from './detalleExamenHem/detalleExamenHem.component'
import {DetalleExamenQuiComponent} from './detalleExamenQui/detalleExamenQui.component'
import {DetalleExamenCopComponent} from './detalleExamenCop/detalleExamenCop.component'
import {DetalleExamenUriComponent} from './detalleExamenUri/detalleExamenUri.component'

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
        path: 'listadoPacientes',
        component: ListadoPacientesComponent,
        data: {
          title: 'Listado Pacientes',
        },
      },
      {
        path: 'detallePaciente/:id',
        component: DetallePacienteComponent,
        data: {
          title: 'Detalle Paciente',
        },
      },
      {
        path: 'detalleExamenCop/:id/:id2',
        component: DetalleExamenCopComponent,
        data: {
          title: 'Detalle Examen Coprologia',
        },
      },
            {
        path: 'detalleExamenUri/:id/:id2',
        component: DetalleExamenUriComponent,
        data: {
          title: 'Detalle Examen Urianalisis',
        },
      },
            {
        path: 'detalleExamenHem/:id/:id2',
        component: DetalleExamenHemComponent,
        data: {
          title: 'Detalle Examen Hematologia',
        },
      },
            {
        path: 'detalleExamenQui/:id/:id2',
        component: DetalleExamenQuiComponent,
        data: {
          title: 'Detalle Examen Quimica',
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
