import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {


  constructor(private paisService :PaisService){}
  regiones:string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ]

  paisPorRegion:Country[] = []

  regionActiva :string = '';

  activarRegion(region:string){
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe(paises =>{
      this.paisPorRegion = paises;
    })
  }



}
