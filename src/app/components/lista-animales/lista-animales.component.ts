import { Component, OnInit } from '@angular/core';
import { ServicioAnimalesService } from 'src/app/service/servicio-animales.service';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {
  animales:any;
  filtro: string = "";
  constructor(public servicioAnimal: ServicioAnimalesService) { }

  ngOnInit(): void {
    this.getAnimales()
    
  }
  getAnimales(){
    this.servicioAnimal.getAnimales().subscribe({
      next: (res:any) => this.animales = res,
      error: (err:any) => console.error(err)
    })
  }
  filtrarAnimales(){
    this.servicioAnimal.getAnimales().subscribe({
      next: (res:any) => this.animales = res.filter((animal:any) => animal.clasificacion == this.filtro),
      error: (err:any) => console.error(err)
    })
  }
}
