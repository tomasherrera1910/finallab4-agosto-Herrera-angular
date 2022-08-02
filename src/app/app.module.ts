import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAnimalesComponent } from './components/lista-animales/lista-animales.component';
import { ItemAnimalComponent } from './components/item-animal/item-animal.component';
import { DetalleAnimalComponent } from './components/detalle-animal/detalle-animal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaAnimalesComponent,
    ItemAnimalComponent,
    DetalleAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
