import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisResponse } from '../../modelos/pais-model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.scss']
})
export class PaisFormComponent implements OnInit {

  titulo: string = 'Crear Pais';
  pais: PaisResponse = new PaisResponse();

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.pais);
  }

  update(): void {

  }

}
