import { Component, NgModule, Attribute } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlurriesComponent } from './weather/flurries.component';
import { SunnyComponent } from './weather/sunny.component';
import { ThunderComponent } from './weather/thunder-storm.component';
import { RainyComponent } from './weather/rainy.component';
import { SunShowerComponent } from './weather/sun-shower.component';
import { CloudyComponent } from './weather/cloudy.component';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})

export class AppComponent {
}
