import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import data from '../../assets/lista_animales.json';
@Injectable({
  providedIn: 'root'
})
export class ServicioAnimalesService {

  constructor(public http: HttpClient) { }

  getAnimales(){
    return this.http.get("assets/lista_animales.json")
  }
}
