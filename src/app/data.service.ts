import { Coffee } from './logic/Coffee';
import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  public endPoint = "http://localhost:3000";

  getCoffee(coffeeId:string,callback){
    this.http.get(`${this.endPoint}/coffees/${coffeeId}`)
           .subscribe(response =>{
             callback(response)
           });
  }

  getList(callback){
    this.http.get(`${this.endPoint}/coffees`)
        .subscribe(response => { 
          console.log(response); callback(response); 
        });
  }
  save(coffee,callback){
     if(coffee._id){
       //It's an update
       this.http.put(`${this.endPoint}/coffees/${coffee._id}`,coffee)
           .subscribe(response =>{
             callback(true);
           });
     }else{
       //It's an insert.
       this.http.post(`${this.endPoint}/coffees`,coffee)
           .subscribe(response =>{
             callback(true);
           });
     }
  }
}
