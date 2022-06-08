import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClinicaResponse } from '../modelos/clinica-model';

@Injectable({
  providedIn: 'root'
})
export class ClinicaSerService {

  private url: string = 'http://localhost:8080/clinica/all';
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  //listar las clinicas
  getClinicas (): Observable <ClinicaResponse[]> {
    return this.http.get(this.url).pipe(
      map(res => res as ClinicaResponse[])
    );
  }

  //metodo para actualizar una clinica
}
