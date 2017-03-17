import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }       from './app.routing';
import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './notfound.component';

import { FlurriesComponent } from './weather/flurries.component';
import { SunnyComponent } from './weather/sunny.component';
import { ThunderComponent } from './weather/thunder-storm.component';
import { RainyComponent } from './weather/rainy.component';
import { SunShowerComponent } from './weather/sun-shower.component';
import { CloudyComponent } from './weather/cloudy.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    ProfileComponent,
    ErrorComponent,
    SunnyComponent,
    FlurriesComponent,
    ThunderComponent,
    RainyComponent,
    SunShowerComponent,
    CloudyComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
