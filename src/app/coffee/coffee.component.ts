import { Coffee } from './../logic/Coffee';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute,
    private geolocation: GeolocationService) { }
  coffee: Coffee;
  types = ["Expresso", "Ristretto", "Americano"];
  routingSubscription: any;

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });
      this.geolocation.requestLocation(location =>{
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      });
  }
  tastingRatingChanged(checked:boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    }else{
      this.coffee.tastingRating = null;
    }
  }
  cancel(){
  }
  save(){
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
