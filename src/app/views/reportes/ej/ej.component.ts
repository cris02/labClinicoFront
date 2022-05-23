import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../../Service/service.service";
import {Factura} from "../../../Modelo/Factura";


@Component({
  selector: 'app-ej',
  templateUrl: './ej.component.html',
  styleUrls: ['./ej.component.scss']
})
export class EjComponent {

  // @ts-ignore
  facturas:Factura[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(){
    this.service.getFacturas()
      .subscribe(data=>{
        this.facturas=data;
      })

  }

}
