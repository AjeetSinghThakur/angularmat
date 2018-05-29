import { Coffee } from './logic/Coffee';
import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback){
    //TODO: Need to be replaced with real web API call.
    const list = [
      new Coffee("Double Expresso",
      "Sunny Cafe",new PlaceLocation("123 market street","San Francisco")),
      new Coffee("Caramel Americano",
      "Starcoffe Cafe",new PlaceLocation("Gran Via 34","Madrid"))
    ];
    callback(list);
  }
  save(coffee,callback){
    //TODO: Need to be replaced with real web API call.
    callback(true);
  }
}
