import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import { ActivatedRoute } from '@angular/router';
import {Paciente} from "../Modelo/Paciente";
import {OrdenDeExamen} from "../Modelo/OrdenDeExamen";
import {ExamenesPacientes} from "../Modelo/ExamenesPacientes";


@Component({
  selector: 'app-detallePaciente',
  templateUrl: './detallePaciente.component.html',
  styleUrls: ['./detallePaciente.component.scss']
})
export class DetallePacienteComponent implements OnInit {

  // @ts-ignore
  paciente: Paciente[];
  // @ts-ignore
  idp:number;
  // @ts-ignore
  ordenes:OrdenDeExamen [];
    // @ts-ignore
  exa:ExamenesPacientes [];

  constructor(private service: ServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPaciente();
    this.getOrdenesT();
    this.getExamenesP();
  }

  getPaciente(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.idp=id;
    // @ts-ignore
    this.service.getDetallePaciente(id).subscribe(data => this.paciente = data);
  }

    getOrdenesT(): void {
    // @ts-ignore
      const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOrdenes(id)
      .subscribe(data => this.ordenes = data);
  }

  getExamenesP() {

    this.service.getExamenesP(this.idp).subscribe(data => this.exa = data);

  }





}
