"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var contacts_list_component_1 = require("./contacts-list.component");
var contacts_details_component_1 = require("./contacts-details.component");
var routes = [
    { path: '', component: contacts_list_component_1.default },
    { path: ':id', component: contacts_details_component_1.default },
];
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=endless.routes.js.map