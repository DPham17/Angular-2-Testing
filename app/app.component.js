"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Weather = (function () {
    function Weather() {
    }
    return Weather;
}());
exports.Weather = Weather;
var WEATHERS = [
    { id: 1, name: 'Sunny' },
    { id: 2, name: 'Flurries' },
    { id: 3, name: 'Thunder' },
    { id: 4, name: 'Rainy' },
    { id: 5, name: 'Sun-Shower' },
    { id: 6, name: 'Cloudy' }
];
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.types = ['Sunny', 'Flurries', 'Thunder', 'Rainy', 'Sun-Shower', 'Cloudy'];
        this.spot = getRandomInt(0, 6);
        // To pipe current date and time
        this.date = new Date();
        this.weather = WEATHERS;
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    AppComponent.prototype.onSelect = function (weather) {
        this.selectedWeather = weather;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//# sourceMappingURL=app.component.js.map