import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";
import {TipoExamenes} from "../../Modelo/TablaTipoExamenes";



@Component({
  selector: 'app-tipos-de-examenes',
  templateUrl: './tipos-de-examenes.component.html',
  styleUrls: ['./tipos-de-examenes.component.scss']
})
export class TiposDeExamenesComponent implements OnInit {

  // @ts-ignore
  datos:TipoExamenes[];
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

    this.service.getReporteTipoExamenes()
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
