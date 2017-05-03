"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'contacts', loadChildren: 'app/contacts/contacts.module' },
    { path: 'activities', loadChildren: 'app/activities/activities.module' },
];
exports.default = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map