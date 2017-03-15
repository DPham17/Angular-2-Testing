import { Component } from '@angular/core';


@Component({
  selector: 'my-weather',
  moduleId: module.id,
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css']
})

export class WeatherComponent {
  getWeather() : string[] {
    return ["Sunny", "Foggy", "Windy", "Snowing"];
  }
}
