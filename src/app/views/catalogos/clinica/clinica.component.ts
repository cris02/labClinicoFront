import { Component, OnInit } from '@angular/core';
import { ClinicaSerService } from '../servicios/clinica-ser.service';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.scss']
})
export class ClinicaComponent implements OnInit {

  constructor(private clinicaService: ClinicaSerService) { }

  ngOnInit(): void {
  }

}
