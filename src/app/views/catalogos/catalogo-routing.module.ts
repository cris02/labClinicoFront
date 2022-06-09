import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica/clinica.component';
import { PaisFormUpdateComponent } from './componentes/pais-form-update/pais-form-update.component';
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
            title: 'clinica',
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
            title: 'registrar',
          },
        },
        {
          path: 'paises/update/:id',
          component: PaisFormUpdateComponent,
          data: {
            title: 'actualizar',
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