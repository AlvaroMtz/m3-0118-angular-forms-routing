import { Injectable } from '@angular/core';

@Injectable()
export class AlbertoContadorService {
    private count: number = 0;
    private ciclista:object = {
        name:"Alberto",
        surname:"Contador",
        championships: 5
    };
    constructor() { }

    increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
    getCount(){
        return this.count;
    }
}