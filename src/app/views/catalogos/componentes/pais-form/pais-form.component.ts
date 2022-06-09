import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisResponse } from '../../modelos/pais-model';
import swal from 'sweetalert2';
import { PaisSerService } from '../../servicios/pais-ser.service';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.scss']
})
export class PaisFormComponent implements OnInit {

  titulo: string = 'Crear Pais';
  pais: PaisResponse = new PaisResponse();

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private paisService: PaisSerService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.paisService.crear(this.pais).subscribe(resp => {
      this.router.navigate(['/catalogos/paises']);
      swal.fire('Nuevo cliente',  `Cliente ${resp.nomPais} creado con exito!`,  'success');
    });
  }

}
