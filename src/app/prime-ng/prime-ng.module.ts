import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';

@NgModule({
  exports: [
    CardModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
