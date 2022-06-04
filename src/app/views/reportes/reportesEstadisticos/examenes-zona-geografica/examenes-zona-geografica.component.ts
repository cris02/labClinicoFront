import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {ExamenesZona} from "../../Modelo/TablaExamenesZona";

@Component({
  selector: 'app-examenes-zona-geografica',
  templateUrl: './examenes-zona-geografica.component.html',
  styleUrls: ['./examenes-zona-geografica.component.scss']
})
export class ExamenesZonaGeograficaComponent implements OnInit {

  // @ts-ignore
  datos:ExamenesZona[];

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

    this.service.loadScript({id: 'my-script', url : 'assets/js/export.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.loadScript({id: 'my-script', url : 'assets/js/export.min.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.loadScript({id: 'my-script', url : 'assets/js/filtro.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.getReporteExamenesPorZona()
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
