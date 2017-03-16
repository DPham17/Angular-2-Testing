"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_page_component_1 = require("./home-page.component");
var service_component_1 = require("./service/service.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_page_component_1.HomeComponent },
    { path: 'service', component: service_component_1.ServiceComponent },
]);
//# sourceMappingURL=app.routing.js.map