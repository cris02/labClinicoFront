import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {Paciente} from "../Modelo/Paciente";

@Component({
  selector: 'app-listadoPacientes',
  templateUrl: './listadoPacientes.component.html',
  styleUrls: ['./listadoPacientes.component.scss']
})
export class ListadoPacientesComponent implements OnInit {

  // @ts-ignore
  datos:Paciente[];

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.loadScript({id: 'my-script', url : 'assets/js/filtro.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

        this.service.getListadoPacientes()
      .subscribe(data=>{
        this.datos=data;
      })

  }

}
