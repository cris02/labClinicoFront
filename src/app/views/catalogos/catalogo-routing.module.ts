import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica/clinica.component';
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';
import { PaisComponent } from './pais/pais.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Clinica'
      },
      children: [
        {
          path: '',
          redirectTo: 'clinica'
        },
        {
          path: 'clinica',
          component: ClinicaComponent,
          data: {
            title: 'Clinica',
          },
        },
        {
          path: 'paises',
          component: PaisComponent,
          data: {
            title: 'Paises',
          },
        },
        {
          path: 'paises/form',
          component: PaisFormComponent,
          data: {
            title: 'formulario',
          },
        },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CatalogoRoutingModule {
  }