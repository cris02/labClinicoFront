import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  exports: [
    CardModule,
    PanelModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    PaginatorModule,
  ]
})
export class PrimeNgModule { }
