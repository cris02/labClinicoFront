import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { PaisResponse } from '../modelos/pais-model';

@Injectable({
  providedIn: 'root'
})

export class PaisSerService {

  private url: string = 'http://localhost:8082/pais';
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  //listar los paises
  getListarPaise(): Observable <PaisResponse[]> {
    return this.http.get(this.url + '/all').pipe(
      map(resp => resp as PaisResponse[])
    );

    //return this.http.get<PaisResponse[]>(this.url + 'all');
  }

  //crear un nuevo pais
  crear(pais: PaisResponse): Observable<PaisResponse> {
    return this.http.post<PaisResponse>(this.url+'/save', pais, {headers: this.httpHeader});
  }

  getPais(id: number): Observable<PaisResponse> {
    return this.http.get<PaisResponse>(`${this.url}/find/${id}`);
  }

  actualizarPais(pais: PaisResponse): Observable<PaisResponse> {
    return this.http.put<PaisResponse>(`${this.url}/upd/${pais.idPais}`, pais, {headers: this.httpHeader});
  }
}
