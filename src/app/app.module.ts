import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatIconModule, MatInputModule,
         MatSelectModule, MatSliderModule, MatToolbarModule, 
         MatCardModule, MatSlideToggleModule } from "@angular/material";
import { Routes, RouterModule } from "@angular/router";
import "hammerjs";

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//These things can be moved to a seperate Route module for large applications.
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule, 
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [GeolocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
