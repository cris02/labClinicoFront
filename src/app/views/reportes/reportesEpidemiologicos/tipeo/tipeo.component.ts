import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {TipeoSangre} from "../../Modelo/TablaTipeoSangre";

@Component({
  selector: 'app-tipeo',
  templateUrl: './tipeo.component.html',
  styleUrls: ['./tipeo.component.scss']
})
export class TipeoComponent implements OnInit {

  // @ts-ignore
  datos:TipeoSangre[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

    this.service.loadScript({id: 'my-script', url : 'assets/js/export.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.loadScript({id: 'my-script', url : 'assets/js/export.min.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.loadScript({id: 'my-script', url : 'assets/js/filtro.js'})
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));

    this.service.getPersonasTipeoSangre()
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
