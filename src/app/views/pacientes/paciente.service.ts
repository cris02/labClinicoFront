import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  private url:string = 'http://localhost:8000/pacientes';

  constructor(private http:HttpClient) { }

  //CREATE
  create(paciente:Paciente):Observable<Paciente> {
    return this.http.post<Paciente>(this.url, paciente);
  }

  //RETRIEVE
  findAll():Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.url);
  }

  get(id:number):Observable<Paciente> {
    return this.http.get<Paciente>(this.url+"/"+id);
  }

  //UPDATE
  update(paciente:Paciente):Observable<Paciente> {
    return this.http.put<Paciente>(this.url, paciente);
  }

  //DELETE
  delete(id:number):Observable<Paciente> {
    return this.http.delete<Paciente>(this.url+"/"+id);
  }
  
}
