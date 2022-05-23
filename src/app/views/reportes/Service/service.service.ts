import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Factura} from "../Modelo/Factura";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://127.0.0.1:8000/facturas/facturasp/';
  getFacturas(){
    return this.http.get<Factura[]>(this.Url);
  }
}
