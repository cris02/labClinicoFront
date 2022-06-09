import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Paciente} from "../Modelo/Paciente";
import {OrdenDeExamen} from "../Modelo/OrdenDeExamen";
import {ExamenesPacientes} from "../Modelo/ExamenesPacientes";
import {ExamenCop} from "../Modelo/ExamenCop";
import {ExamenQui} from "../Modelo/ExamenQui";
import {ExamenUri} from "../Modelo/ExamenUri";
import {ExamenHem} from "../Modelo/ExamenHem";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlListado='http://localhost:8082/paciente/all';
  UrlPaciente='http://localhost:8082/paciente/find?id=';
  UrlOrdenes='http://localhost:8082/orden/findPaciente?id=';
  UrlExamenesP='http://localhost:8082/orden/listarExamen/';
  UrlExamenCop='http://localhost:8082/examen/cpl/find?o=';
  UrlExamenHma='http://localhost:8082/examen/hma/find?o=';
  UrlExamenQcl='http://localhost:8082/examen/qcl/find?o=';
  UrlExamenUri='http://localhost:8082/examen/uri/find?o=';

  getListadoPacientes(){
    return this.http.get<Paciente[]>(this.UrlListado);
  }

    // @ts-ignore
  getDetallePaciente(param){
    return this.http.get<Paciente[]>(this.UrlPaciente+param);
  }

      // @ts-ignore
  getOrdenes(param){
    return this.http.get<OrdenDeExamen[]>(this.UrlOrdenes+param);
  }

        // @ts-ignore
  getExamenesP(param){
    return this.http.get<ExamenesPacientes[]>(this.UrlExamenesP+param);
  }


          // @ts-ignore
  getDetalleExamenCop(id1,id2){
    return this.http.get<ExamenCop[]>(this.UrlExamenCop+id1+'&e='+id2);
  }

            // @ts-ignore
  getDetalleExamenQui(id1,id2){
    return this.http.get<ExamenQui[]>(this.UrlExamenUri+id1+'&e='+id2);
  }

            // @ts-ignore
  getDetalleExamenUri(id1,id2){
    return this.http.get<ExamenUri[]>(this.UrlExamenUri+id1+'&e='+id2);
  }

            // @ts-ignore
  getDetalleExamenHma(id1,id2){
    return this.http.get<ExamenHem[]>(this.UrlExamenHma+id1+'&e='+id2);
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
