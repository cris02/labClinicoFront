import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {ExamenesFecha} from "../../Modelo/TablaExamenesPorFecha";

@Component({
  selector: 'app-examenes-por-fecha',
  templateUrl: './examenes-por-fecha.component.html',
  styleUrls: ['./examenes-por-fecha.component.scss']
})
export class ExamenesPorFechaComponent implements OnInit {

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  // @ts-ignore
  datos:ExamenesFecha[];

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  Obtener(a:Date,b:Date){
    let fechainicial;
    let fechafinal;
    let diaA;
    let mesA;
    let anioA;
    let diaB;
    let mesB;
    let anioB;

    if(a.getDate()<10){
      diaA='0'+a.getDate().toString();
    }
    else{
      diaA=a.getDate().toString();
    }

    if((a.getMonth()+1)<10){
      mesA='0'+(a.getMonth()+1).toString();
    }
    else{
      mesA=(a.getMonth()+1).toString();
    }

    anioA=a.getFullYear().toString();

    fechainicial=diaA+mesA+anioA;

    if(b.getDate()<10){
      diaB='0'+b.getDate().toString();
    }
    else{
      diaB=b.getDate().toString();
    }

    if((b.getMonth()+1)<10){
      mesB='0'+(b.getMonth()+1).toString();
    }
    else{
      mesB=(b.getMonth()+1).toString();
    }

    anioB=b.getFullYear().toString();


    fechafinal=diaB+mesB+anioB;

          this.service.getReportePorFecha(fechainicial,fechafinal)
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
