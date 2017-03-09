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
      <div [ngSwitch]="types[spot]">
        <sunny *ngSwitchCase = "'Sunny'"></sunny>
        <flurries *ngSwitchCase = "'Flurries'"></flurries>
        <thunder *ngSwitchCase = "'Thunder'"></thunder>
        <rainy *ngSwitchCase = "'Rainy'"></rainy>
        <sun-shower *ngSwitchCase = "'Sun-Shower'"></sun-shower>
        <cloudy *ngSwitchCase = "'Cloudy'"></cloudy>
      </div>

    </div>
  `
})

export class AppComponent {
  types = ['Sunny', 'Flurries', 'Thunder', 'Rainy', 'Sun-Shower', 'Cloudy'];
  spot = getRandomInt(0,6);
  weather = 'Sunny';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
