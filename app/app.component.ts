import { Component, NgModule } from '@angular/core';
import { FlurriesComponent } from './weather/flurries.component';
import { SunnyComponent } from './weather/sunny.component';
import { ThunderComponent } from './weather/thunder-storm.component';
import { RainyComponent } from './weather/rainy.component';
import { SunShowerComponent } from './weather/sun-shower.component';
import { CloudyComponent } from './weather/cloudy.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>My Sandbox</h1>
    <h2>Animated Weather Icons</h2>
    <div>
      <div>
        <font>March 8, 2017</font>
      </div>
      <sunny *ngIf="types[spot] === 'Sunny'"></sunny>
      <flurries *ngIf="types[spot] === 'Flurries'"></flurries>
      <thunder *ngIf="types[spot] === 'Thunder'"></thunder>
      <rainy *ngIf="types[spot] === 'Rainy'"></rainy>
      <sun-shower *ngIf="types[spot] === 'Sun-Shower'"></sun-shower>
      <cloudy *ngIf="types[spot] === 'Cloudy'"></cloudy>
    </div>
  `
})

export class AppComponent {
  types = ['Sunny', 'Flurries', 'Thunder', 'Rainy', 'Sun-Shower', 'Cloudy'];
  spot = getRandomInt(0,6);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
