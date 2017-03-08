import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FlurriesComponent } from './weather/flurries.component';
import { SunnyComponent } from './weather/sunny.component';
import { ThunderComponent } from './weather/thunder-storm.component';
import { RainyComponent } from './weather/rainy.component';
import { SunShowerComponent } from './weather/sun-shower.component';
import { CloudyComponent } from './weather/cloudy.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    SunnyComponent,
    FlurriesComponent,
    ThunderComponent,
    RainyComponent,
    SunShowerComponent,
    CloudyComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
