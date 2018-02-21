import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Frase } from '../quote-list/quote-list.component';
import { AlbertoContadorService } from '../../services/AlbertoContador.service';

/** 
 * 
 * let service = new AlbertoContadorService();
 * let component  = new QuoteItemComponent(service);
*/



@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
  //providers:[AlbertoContadorService] // NOTE: make a service for each quote-item
})
export class QuoteItemComponent implements OnInit, OnDestroy {

  @Input() q:Frase = { text:"Hola q ase", author:"Chiquito", damage:0}
  @Input() damage:number;
  @Input() id:number;
  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();
  
  constructor(public contador:AlbertoContadorService) { }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    console.log("Destroying item " + this.q.text);
  }

  onDelete(){
    this.deleteEvent.emit(this.id);
  }

  cuentaAlberto(){
    this.contador.increment();
  }

}
