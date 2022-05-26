import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {Dato} from "../Modelo/Dato";
import * as FileSaver from 'file-saver';
import * as $ from 'jquery';


@Component({
  selector: 'app-reportesGenerales',
  templateUrl: './reportesGenerales.component.html',
  styleUrls: ['./reportesGenerales.component.scss']
})
export class ReportesGeneralesComponent {
  // @ts-ignore
  name:string;
  lista:string[]=["facturasp/","tipofactura/"];
  // @ts-ignore
  datos: Dato[];

  constructor(private service:ServiceService,private router:Router) {}

    vaciarTabla(){
     location.reload()
  }

  // @ts-ignore
  llenarTabla(misDatos,idTabla: string){
    JSON.stringify(misDatos);
  // @ts-ignore
    var claves = [];
  if (misDatos.length > 0) {
    claves = Object.keys(misDatos[0]);
    let fila = document.createElement("tr");
    for (let x = 0; x < claves.length; x++) {
      let celda = document.createElement("th");
      celda.textContent = claves[x];
      fila.append(celda);
    }
    // @ts-ignore
    document.getElementById(idTabla).append(fila);
  }
  for (let x = 0; x < misDatos.length; x++) {
    let fila = document.createElement("tr");
    for (let y = 0; y < claves.length; y++) {
      let celda = document.createElement("td");
      // @ts-ignore
      celda.textContent = misDatos[x][claves[y]];
      fila.append(celda);
    }
    // @ts-ignore
    document.getElementById(idTabla).append(fila);
  }
}

      Consultar(par:string){
    this.service.getReporte(par)
      .subscribe(data=>{
        this.datos=data;
      })
  }

    exportExcel() {
    if (this.datos.length > 0) {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.datos);
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




