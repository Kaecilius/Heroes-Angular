import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index:number;
  @Input() nombreHeroe:string;
  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(
    private router:Router,
    private _heroesService: HeroesService
  ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit( this.index  );
  }
}
