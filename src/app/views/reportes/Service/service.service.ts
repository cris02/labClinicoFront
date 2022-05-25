import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Factura} from "../Modelo/Factura";
import {Dato} from "../Modelo/Dato";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://127.0.0.1:8000/facturas/';
  getFacturas(){
    return this.http.get<Factura[]>(this.Url+'facturasp/');
  }

  getReporte(param: string){
    return this.http.get<Dato[]>(this.Url+param);
  }

  // @ts-ignore
  public loadScript({id, url}) {
        return new Promise((resolve, reject) => {
        if(id && document.getElementById(id)) {
            resolve({id: id, loaded: true, status: 'Already Loaded'});
        }
        let body =  document.body;
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = '';
        script.src = url;
        script.id = id;
        script.onload =() => {
            resolve({id: id, loaded: true, status: 'Loaded'});
        };
        script.onerror = (error: any) => resolve({id: id, loaded: false, status: 'Loaded'});
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    });
    }

    public removeScript(id: string) {
        let script = document.getElementById(id);
        if(script) {
            script.remove();
        }
    }
}
