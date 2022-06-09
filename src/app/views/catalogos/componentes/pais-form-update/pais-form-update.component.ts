import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisResponse } from '../../modelos/pais-model';
import { PaisSerService } from '../../servicios/pais-ser.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pais-form-update',
  templateUrl: './pais-form-update.component.html',
  styleUrls: ['./pais-form-update.component.scss']
})
export class PaisFormUpdateComponent implements OnInit {

  titulo: string = 'Actualizar Pais';
  pais: PaisResponse = new PaisResponse();

  constructor(private paisService: PaisSerService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPais();
  }

  cargarPais(): void {
    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this.paisService.getPais(id).subscribe(resp => {
          this.pais = resp;
        });
      }
    });
  }

  update(): void {
    this.paisService.actualizarPais(this.pais).subscribe (resp => {
      this.router.navigate(['/catalogos/paises']);
      swal.fire('Pais Actualizado',  `${resp.nomPais} actualizado con exito!`,  'success');
    });
  }

}
