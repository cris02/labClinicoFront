import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from "../../Service/service.service";

@Component({
  selector: 'app-reportesEpidemiologicos',
  templateUrl: './reportesEpidemiologicos.component.html',
  styleUrls: ['./reportesEpidemiologicos.component.scss']
})
export class ReportesEpidemiologicosComponent implements OnInit {
  // @ts-ignore
  name:string;
  lista:string[]=["Personas con trigliceridos altos por zona","Tipos de sangre por zona"];

  constructor(private service:ServiceService,private router:Router) {
  }

  ngOnInit(): void {

  }

navegar(param:string) {

    if(param =='Personas con trigliceridos altos por zona')
    {this.router.navigate(['reportes/reportesEpidemiologicos/trigliceridos']);}
    else{
      this.router.navigate(['reportes/reportesEpidemiologicos/tipeo']);
    }


}

}
