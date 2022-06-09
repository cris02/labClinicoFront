import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListadoPacientesComponent } from './listadoPacientes/listadoPacientes.component';
import { DetallePacienteComponent } from './detallePaciente/detallePaciente.component';
import {CardModule, GridModule} from "@coreui/angular";
import {DocsComponentsModule} from "../../../components";
import { DetalleExamenCopComponent } from './detalleExamenCop/detalleExamenCop.component';
import { DetalleExamenUriComponent } from './detalleExamenUri/detalleExamenUri.component';
import { DetalleExamenHemComponent } from './detalleExamenHem/detalleExamenHem.component';
import { DetalleExamenQuiComponent } from './detalleExamenQui/detalleExamenQui.component';



@NgModule({
  declarations: [
    ListadoPacientesComponent,
    DetallePacienteComponent,
    DetalleExamenCopComponent,
    DetalleExamenUriComponent,
    DetalleExamenHemComponent,
    DetalleExamenQuiComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    GridModule,
    DocsComponentsModule,
    CardModule,
  ]
})
export class PacientesModule { }
