import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[];
  busqueda:boolean = true;
  terminoBusqueda:string;
  hereoid:number;
  tamanioBusqueda:number;

  constructor(
    private activedRoute: ActivatedRoute,
    private _heroesService:HeroesService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.activedRoute.params.subscribe( heroe=>{

      this.terminoBusqueda = heroe['heroe'];

      if( !this.terminoBusqueda || this.terminoBusqueda == ' '){
          console.log( 'redireccionar a heroes');
          this.router.navigate( ['/heroes'] )
      }

      this.heroes = this._heroesService.buscarHeroes(heroe['heroe']);
     

      if(this.heroes.length > 0){
        this.busqueda = true;
        this.tamanioBusqueda = this.heroes.length;
      }else{
        this.busqueda = false;
      }
    
    });

  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );

  }


}
