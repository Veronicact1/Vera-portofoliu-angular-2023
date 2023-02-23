import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false; 
  equipo: any = [];
  constructor( private http:HttpClient ) {
    this.cargaInfo();
    this.cargarEquipo();
  }
  private cargaInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp) => {
      this.cargada = true;
      this.info = resp; 
      // console.log(resp);
      });
  }

  private cargarEquipo(){
    this.http
    .get("https://angular-project-75414-default-rtdb.europe-west1.firebasedatabase.app/equipo.json")
    .subscribe( (resp) => {
      this.equipo = resp; 
      console.log(resp);
      });
  }

}
