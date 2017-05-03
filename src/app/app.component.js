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
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.navigationItems = [
            { route: '', name: 'home' },
            { route: 'contacts', name: 'contacts' },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <style>\n        a {\n            text-decoration: none;\n            text-transform: uppercase;\n        }\n        a.active {\n            font-weight: bold;\n        }\n    </style>\n    <nav>\n        <a\n            *ngFor=\"let item of navigationItems\"\n            [routerLink]=\"item.route\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n        >\n        {{item.name}}\n        </a>\n    </nav>\n    <router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [router_1.RouterModule])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map