import { Component, OnInit, Input} from '@angular/core';

export interface Frase{
  text:string,
  author:string,
  damage:number,
}

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() color;
  colorStyle:object;
  frasesDeMarc:Array<Frase> = [
    {text:"Eso lo vemos en el módulo 3", author:"MarcP", damage:40},
    {text:"Fijaos en un detallito", author:"MarcP", damage:10},
    {text:"Mecagonelaputa", author:"MarcP", damage:50},
    {text:"Eso es absurdo", author:"MarcP", damage:100},
    {text:"¡Cállate Adrián!", author:"MarcP", damage:100}
  ]

  constructor() { 
  }

  ngOnInit() {
    this.colorStyle = {
      'background-color': this.color,
    }
    setInterval( () => {
      this.frasesDeMarc.forEach(f => {
        f.damage = (f.damage + 1) % 100;
      })
    },100)
  }

  deleteItem(idx:number){
    console.log(`Called deleteItem for index ${idx}`);
    this.frasesDeMarc.splice(idx,1);
  }

  deleteall(){
    this.frasesDeMarc = [];
  }

}
