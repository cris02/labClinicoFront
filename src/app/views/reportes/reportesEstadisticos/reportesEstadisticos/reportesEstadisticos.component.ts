import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {ServiceService} from "../../Service/service.service";

@Component({
  selector: 'app-reportesEstadisticos',
  templateUrl: './reportesEstadisticos.component.html',
  styleUrls: ['./reportesEstadisticos.component.scss']
})
export class ReportesEstadisticosComponent implements OnInit {
  // @ts-ignore
  name:string;
  lista:string[]=["Estadísticas por áreas la cantidad de exámenes realizados",
    "Tipos de examenes realizados",
    "Examenes realizados por fecha",
    "Examenes realizados por zona geografica"
  ];

  constructor(private service:ServiceService,private router:Router) {
  }

  ngOnInit(): void {

  }

navegar(param:string) {

    if(param =='Estadísticas por áreas la cantidad de exámenes realizados')
    {this.router.navigate(['reportes/reportesEstadisticos/examenesPorArea']);}
    else{
      if(param =='Tipos de examenes realizados')
      {this.router.navigate(['reportes/reportesEstadisticos/tiposDeExamenesRealizados']);}
      else{
        if(param =='Examenes realizados por fecha')
        {this.router.navigate(['reportes/reportesEstadisticos/examenesPorFecha']);}
        else{
          if(param =='Examenes realizados por zona geografica')
          {this.router.navigate(['reportes/reportesEstadisticos/examenesPorZonaGeografica']);}
          else{
            this.router.navigate(['reportes/reportesEstadisticos/']);
          }
        }
      }

    }


}

}
