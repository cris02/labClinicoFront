import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dato} from "../Modelo/Dato";
import {TipeoSangre} from "../Modelo/TablaTipeoSangre";
import {TrigliceridosAltos} from "../Modelo/TablaTrigliceridosAltos";
import {ExamenesArea} from "../Modelo/TablaExamenesPorFecha";
import {ExamenesZona} from "../Modelo/TablaExamenesZona";
import {TipoExamenes} from "../Modelo/TablaTipoExamenes";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlG='http://34.136.131.246:8082/';
  UrlTipeo='';
  UrlTrigliceridos='';
  UrlExamenesFechas='';
  UrlExamenesPorArea='';
  UrlExamenesPorZona='';
  UrlTipoExamenes='';

  getReporte(param: string){
    return this.http.get<Dato[]>(this.UrlG+param.toLowerCase());
  }

  getPersonasTrigliceridosAltos(){
  return this.http.get<TrigliceridosAltos[]>(this.UrlTrigliceridos);
  }

    getPersonasTipeoSangre(){
  return this.http.get<TipeoSangre[]>(this.UrlTipeo);
  }

    getReportePorFecha(ini: string,fin:string){
    return this.http.get<ExamenesArea[]>(this.UrlExamenesFechas+'/'+ini+'/'+fin+'/');
  }

    getReporteExamenesPorArea(){
    return this.http.get<ExamenesArea[]>(this.UrlExamenesPorArea);
  }

   getReporteExamenesPorZona(){
    return this.http.get<ExamenesZona[]>(this.UrlExamenesPorZona);
  }

   getReporteTipoExamenes(){
    return this.http.get<TipoExamenes[]>(this.UrlTipoExamenes);
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
