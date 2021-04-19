import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private paisService :PaisService) { }
  pais!: Country ;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
        switchMap( (param) => this.paisService.buscarPorCodigo(param.id) ),
        tap( console.log  )
    )
    .subscribe(resp => this.pais = resp)
    // this.activatedRoute.params
    // .subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.buscarPorCodigo(id).subscribe(pais =>{
    //       console.log(pais);
    //   })
    // })
  }

}
