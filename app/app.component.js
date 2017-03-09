"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.types = ['Sunny', 'Flurries', 'Thunder', 'Rainy', 'Sun-Shower', 'Cloudy'];
        this.spot = getRandomInt(0, 6);
        this.weather = 'Sunny';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>My Sandbox</h1>\n    <h2>Animated Weather Icons</h2>\n    <div>\n      <div>\n        <font>March 8, 2017</font>\n      </div>\n      <div [ngSwitch]=\"types[spot]\">\n        <sunny *ngSwitchCase = \"'Sunny'\"></sunny>\n        <flurries *ngSwitchCase = \"'Flurries'\"></flurries>\n        <thunder *ngSwitchCase = \"'Thunder'\"></thunder>\n        <rainy *ngSwitchCase = \"'Rainy'\"></rainy>\n        <sun-shower *ngSwitchCase = \"'Sun-Shower'\"></sun-shower>\n        <cloudy *ngSwitchCase = \"'Cloudy'\"></cloudy>\n      </div>\n\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//# sourceMappingURL=app.component.js.map