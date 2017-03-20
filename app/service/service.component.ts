import { Component, NgModule, Attribute } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlurriesComponent } from '../weather/flurries.component';
import { SunnyComponent } from '../weather/sunny.component';
import { ThunderComponent } from '../weather/thunder-storm.component';
import { RainyComponent } from '../weather/rainy.component';
import { SunShowerComponent } from '../weather/sun-shower.component';
import { CloudyComponent } from '../weather/cloudy.component';

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
  selector: 'my-service',
  moduleId: module.id,
  templateUrl: 'service.component.html',
  styleUrls: ['service.component.css']
})

export class ServiceComponent {
  weather = WEATHERS;
  selectedWeather: Weather;

  onSelect(weather: Weather): void {
    this.selectedWeather = weather;
  }
}
