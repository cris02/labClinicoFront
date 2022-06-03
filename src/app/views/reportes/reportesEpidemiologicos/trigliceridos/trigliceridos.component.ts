import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {TrigliceridosAltos} from "../../Modelo/TablaTrigliceridosAltos";

@Component({
  selector: 'app-trigliceridos',
  templateUrl: './trigliceridos.component.html',
  styleUrls: ['./trigliceridos.component.scss']
})
export class TrigliceridosComponent implements OnInit {

  // @ts-ignore
  datos:TrigliceridosAltos[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
        this.service.getPersonasTrigliceridosAltos()
      .subscribe(data=>{
        this.datos=data;
      })
  }

}
