import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  private lista!:Paciente[];

  constructor(private service:PacienteService, router:Router) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(
      p => this.lista = p
    );
  }

}
