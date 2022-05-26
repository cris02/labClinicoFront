import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {Dato} from "../Modelo/Dato";
import {Paciente} from "../Modelo/Paciente";
import {Municipio} from "../Modelo/Municipio";
import * as FileSaver from 'file-saver';
import * as $ from 'jquery';
import {ExamenQuimicaClinica} from "../Modelo/ExamenQuimicaClinica";


@Component({
  selector: 'app-reportesEpidemiologicos',
  templateUrl: './reportesEpidemiologicos.component.html',
  styleUrls: ['./reportesEpidemiologicos.component.scss']
})
export class ReportesEpidemiologicosComponent implements OnInit {
    // @ts-ignore
  name:string;
  lista:string[]=["Reporte1/","Reporte2/"];
  // @ts-ignore
  datos: Dato[];
    // @ts-ignore
  pacientes: Paciente[];
      // @ts-ignore
  municipios: Municipio[];
        // @ts-ignore
  examenesq: ExamenQuimicaClinica[];
  // @ts-ignore
  cantP:number[];
  // @ts-ignore
  cantEC:number[];
  // @ts-ignore
  cantEAU:number[];
  // @ts-ignore
  cantEG:number[];

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

    ConsultarTA(){
    this.service.getPersonasTrigliceridosAltos()
      .subscribe(data=>{
        this.pacientes=data;
      });
    this.service.getMunicipios()
      .subscribe(data=>{
        this.municipios=data;
      });
        this.service.getExamenesQuimicaClinica()
      .subscribe(data=>{
        this.examenesq=data;
      });
  }
  llenarTablaTA(){
    var contador: number =0;
    var contadorP:number=0;
    var contadorEC:number=0;
    var contadorEAU:number=0;
    var contadorEG:number=0;

    for(let mun of this.municipios){
      for(let p of this.pacientes){
        if(p.id_municipio==mun.id_municipio){
          contadorP=contadorP+1;
        }
          //Aqui deberia ir el for para relacionar los examenes con los pacientes
          //Para rellenar los contadores EC,EAU y EG
      }
    contador=contador+1;
    }
  }


  vaciarTabla(){
     location.reload()
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

}
