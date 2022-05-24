import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {Factura} from "../Modelo/Factura";
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-ej',
  templateUrl: './ej.component.html',
  styleUrls: ['./ej.component.scss']
})
export class EjComponent {

  // @ts-ignore
  facturas:Factura[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(){
    this.service.getFacturas()
      .subscribe(data=>{
        this.facturas=data;
      })
  }

    exportExcel() {
    if (this.facturas.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.facturas);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "ExportExcel");
      });
    }
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
