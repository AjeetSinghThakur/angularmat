import { Coffee } from './../logic/Coffee';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coffeeList: [Coffee];

  constructor(private dataSerice:DataService) { }

  ngOnInit() {
    this.dataSerice.getList(list=>{
      this.coffeeList = list;
    });
  }
}
