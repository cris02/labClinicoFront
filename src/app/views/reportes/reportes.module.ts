import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// views
import { EjComponent } from './ej/ej.component';

// Components Routing
import { ReportesRoutingModule } from './reportes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
  ],
  declarations: [
    EjComponent,

  ],
})
export class ReportesModule {}
