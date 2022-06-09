import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../modelos/pais-model';

@Component({
  selector: 'app-pais-form-update',
  templateUrl: './pais-form-update.component.html',
  styleUrls: ['./pais-form-update.component.scss']
})
export class PaisFormUpdateComponent implements OnInit {

  titulo: string = 'Actualizar Pais';
  pais: PaisResponse = new PaisResponse();

  constructor() { }

  ngOnInit(): void {
  }

  update(): void {

  }

}
