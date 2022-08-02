import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interface/animal';
import { ServicioAnimalesService } from 'src/app/service/servicio-animales.service';

@Component({
  selector: 'app-detalle-animal',
  templateUrl: './detalle-animal.component.html',
  styleUrls: ['./detalle-animal.component.css']
})
export class DetalleAnimalComponent implements OnInit {
  id: any;
  animal: any;
  constructor(private route: ActivatedRoute, public servicioAnimal:ServicioAnimalesService) { }

  ngOnInit(): void {
    this.setId()
    this.getAnimal()
  }
  setId(){
    this.id = this.route.snapshot.params['id'];
  }
  getAnimal(){
    this.servicioAnimal.getAnimales().subscribe({
      next: (res:any) => this.animal = res.find((ani:any) => ani.id === this.id),
      error: (err:any) => console.error(err)
    })
  }
}
