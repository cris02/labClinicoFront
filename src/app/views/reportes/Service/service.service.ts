import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dato} from "../Modelo/Dato";
import {Paciente} from "../Modelo/Paciente";
import {Municipio} from "../Modelo/Municipio";
import {ExamenQuimicaClinica} from "../Modelo/ExamenQuimicaClinica";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlG='http://127.0.0.1:8000/rpt/';
  Url2='';
  Url3='';

  getReporte(param: string){
    return this.http.get<Dato[]>(this.UrlG+param.toLowerCase()+'/');
  }

  getPersonasTrigliceridosAltos(){
    return this.http.get<Paciente[]>(this.Url2);
  }

    getMunicipios(){
    return this.http.get<Municipio[]>(this.Url3);
  }

    getExamenesQuimicaClinica(){
    return this.http.get<ExamenQuimicaClinica[]>(this.Url3);
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
