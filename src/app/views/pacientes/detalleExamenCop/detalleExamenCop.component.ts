import { Component, OnInit } from '@angular/core';
import {ExamenCop} from "../Modelo/ExamenCop";
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalleExamenCop',
  templateUrl: './detalleExamenCop.component.html',
  styleUrls: ['./detalleExamenCop.component.scss']
})
export class DetalleExamenCopComponent implements OnInit {

  // @ts-ignore
  cop:ExamenCop [];
  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

            this.service.loadScript({id: 'my-script', url : 'assets/js/jspdf.min.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));
    this.getExamen();
  }


    getExamen(): void {
    // @ts-ignore
    const id1 = +this.route.snapshot.paramMap.get('id1');
    // @ts-ignore
      const id2 = +this.route.snapshot.paramMap.get('id2');

    // @ts-ignore
      this.service.getDetalleExamenCop(1,1).subscribe(data => this.cop = data);
  }

  imprimir(){
                this.service.loadScript({id: 'my-script', url : 'assets/js/pdf.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));
  }

}
