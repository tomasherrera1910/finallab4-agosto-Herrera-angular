import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';

const routes: Routes = [
  {
    path:'',
    component: ListaAnimalesComponent
  },
  {
    path:'animal/:id',
    component: DetalleAnimalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
