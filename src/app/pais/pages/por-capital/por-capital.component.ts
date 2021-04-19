import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino:string = ""
  error:boolean = false;
  paises:Country[] = [];

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.termino = termino;
    console.log(this.termino);
    this.error= false;
      this.paisService.buscarPorCapital(this.termino).subscribe(paises =>{
          console.log(paises);
          this.paises = paises;
      }, (err)=>{
        console.log(err);
        this.error= true;
        this.paises = [];
      })
  }

  sugerencias(termino:string){
    this.error = false
    //TODO: CREAR SUGERENCIAS
  }

  ngOnInit(): void {
  }

}
