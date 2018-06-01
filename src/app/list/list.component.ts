import { GeolocationService } from './../geolocation.service';
import { Coffee } from './../logic/Coffee';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coffeeList: [Coffee];

  constructor(private dataSerice:DataService,
              private router:Router,
              private geolocation:GeolocationService) { }

  ngOnInit() {
    this.dataSerice.getList(list=>{
      this.coffeeList = list;
    });
  }
  getDetails(coffee:Coffee){
    this.router.navigate(["/coffee",coffee._id]);
  }
  goMap(coffee:Coffee){
    const mapURL = this.geolocation.getMapLink(coffee.location);
    location.href = mapURL;
  }
  share(coffee:Coffee){
    const sharedText = `Had this coffee at ${coffee.place}`;
    if('share' in navigator){
      navigator["share"]({
        title:coffee.name,
        text:sharedText,
        url:window.location.href
      }).then(()=> console.log("shared")).catch(() =>console.log("Error sharing"));
    }else{
      const shareURL = `whatsapp://send?text=${encodeURIComponent(sharedText)}`
      location.href= shareURL;
    }
  }
}
