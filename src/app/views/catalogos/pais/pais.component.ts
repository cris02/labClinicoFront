import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../modelos/pais-model';
import { PaisSerService } from '../servicios/pais-ser.service'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  paises: PaisResponse[] = [];
  pageActual: number = 1;
  filterPais = '';

  constructor(private paisService: PaisSerService) { }

  ngOnInit(): void {

    this.paisService.getListarPaise().subscribe((resp) => {
      resp.forEach(e => this.paises.push(e))
    });
    //console.log(this.paises); 

  }

}
