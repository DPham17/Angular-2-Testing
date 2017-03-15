import { Component, NgModule } from '@angular/core';
import { FlurriesComponent } from './weather/flurries.component';
import { SunnyComponent } from './weather/sunny.component';
import { ThunderComponent } from './weather/thunder-storm.component';
import { RainyComponent } from './weather/rainy.component';
import { SunShowerComponent } from './weather/sun-shower.component';
import { CloudyComponent } from './weather/cloudy.component';

export class Weather {
  id: number;
  name: string;
}

const WEATHERS: Weather[] = [
  { id: 1, name: 'Sunny' },
  { id: 2, name: 'Flurries' },
  { id: 3, name: 'Thunder' },
  { id: 4, name: 'Rainy' },
  { id: 5, name: 'Sun-Shower' },
  { id: 6, name: 'Cloudy' }
];

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  types = ['Sunny', 'Flurries', 'Thunder', 'Rainy', 'Sun-Shower', 'Cloudy'];
  spot = getRandomInt(0,6);

  weather = WEATHERS;
  selectedWeather: Weather;

  onSelect(weather: Weather): void {
    this.selectedWeather = weather;
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
