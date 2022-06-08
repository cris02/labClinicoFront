import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './clinica/clinica.component';

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
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CatalogoRoutingModule {
  }