import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer
    }`
  ]
})
export class PorPaisComponent {

  termino:string = ""
  error:boolean = false;
  paises:Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia:boolean = false;

  constructor(private paisService: PaisService){}
  buscar(termino:string){
    this.mostrarSugerencia = true;
    this.termino = termino;
    console.log(this.termino);
    this.error= false;
      this.paisService.buscarPais(this.termino).subscribe(paises =>{
          console.log(paises);
          this.paises = paises;
          this.mostrarSugerencia = false;
      }, (err)=>{
        console.log(err);
        this.error= true;
        this.paises = [];
      })
  }

  sugerencias(termino:string){
    this.error = false
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(termino)
    .subscribe(paises => {
        this.paisesSugeridos = paises
    },(err) =>{
      this.paisesSugeridos = [];
    })
  }

}
