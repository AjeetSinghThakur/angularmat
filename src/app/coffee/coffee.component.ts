import { DataService } from './../data.service';
import { Coffee } from './../logic/Coffee';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute,
    private geolocation: GeolocationService,
    private router: Router,
    private data: DataService) { }
  
  coffee: Coffee;
  types = ["Expresso", "Ristretto", "Americano"];
  routingSubscription: any;

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => { console.log(params["id"]); });

    this.getLocation();
  }
  getLocation(){
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
    this.router.navigate(["/"]);
  }
  save(){
    this.data.save(this.coffee, result => {
      if(result){
        this.router.navigate(["/"]);
      }
    }); 
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
