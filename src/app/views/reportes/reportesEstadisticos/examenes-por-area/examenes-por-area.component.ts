import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {ExamenesArea} from "../../Modelo/TablaExamenesPorFecha";

@Component({
  selector: 'app-examenes-por-area',
  templateUrl: './examenes-por-area.component.html',
  styleUrls: ['./examenes-por-area.component.scss']
})
export class ExamenesPorAreaComponent implements OnInit {
  // @ts-ignore
  datos:ExamenesArea[];

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

    this.service.getReporteExamenesPorArea()
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
