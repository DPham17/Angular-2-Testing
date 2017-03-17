"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var service_component_1 = require("./service/service.component");
var profile_component_1 = require("./profile/profile.component");
var notfound_component_1 = require("./notfound.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'service', component: service_component_1.ServiceComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: '**', component: notfound_component_1.ErrorComponent }
]);
//# sourceMappingURL=app.routing.js.map