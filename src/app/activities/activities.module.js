"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var shared_1 = require("primeng/components/common/shared");
var datatable_1 = require("primeng/components/datatable/datatable");
var activities_routes_1 = require("./activities.routes");
var activities_component_1 = require("./activities.component");
var activities_service_1 = require("./activities.service");
var ActivitiesModule = (function () {
    function ActivitiesModule() {
    }
    return ActivitiesModule;
}());
ActivitiesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, activities_routes_1.default, shared_1.SharedModule, datatable_1.DataTableModule],
        declarations: [activities_component_1.default],
        providers: [activities_service_1.default],
    })
], ActivitiesModule);
exports.default = ActivitiesModule;
//# sourceMappingURL=activities.module.js.map