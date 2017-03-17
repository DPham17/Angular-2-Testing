"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var service_component_1 = require("./service/service.component");
var profile_component_1 = require("./profile/profile.component");
var notfound_component_1 = require("./notfound.component");
var flurries_component_1 = require("./weather/flurries.component");
var sunny_component_1 = require("./weather/sunny.component");
var thunder_storm_component_1 = require("./weather/thunder-storm.component");
var rainy_component_1 = require("./weather/rainy.component");
var sun_shower_component_1 = require("./weather/sun-shower.component");
var cloudy_component_1 = require("./weather/cloudy.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MaterialModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            service_component_1.ServiceComponent,
            profile_component_1.ProfileComponent,
            notfound_component_1.ErrorComponent,
            sunny_component_1.SunnyComponent,
            flurries_component_1.FlurriesComponent,
            thunder_storm_component_1.ThunderComponent,
            rainy_component_1.RainyComponent,
            sun_shower_component_1.SunShowerComponent,
            cloudy_component_1.CloudyComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map