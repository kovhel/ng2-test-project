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
var ActivitiesComponent = (function () {
    function ActivitiesComponent() {
        this.activities = [];
        for (var i = 1; i < 10; ++i) {
            this.activities.push({
                id: "proj00" + i + "-001-001-001-M320",
                site: 'site',
                startDate: new Date(),
                dueDate: new Date(),
                status: 'dispatched',
                engineer: '',
                competency: '-',
                subDomain: '-'
            });
        }
    }
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    core_1.Component({
        template: "\n<div>\n    <h3>Activities</h3>\n    <p-dataTable [value]=\"activities\" [rows]=\"5\" [paginator]=\"true\">\n        <p-column field=\"id\" header=\"ActivityID\"></p-column>\n        <p-column field=\"site\" header=\"Site\"></p-column>\n        <p-column field=\"startDate\" header=\"Start Date\"></p-column>\n        <p-column field=\"dueDate\" header=\"Due Date\"></p-column>\n        <p-column field=\"status\" header=\"Status\"></p-column>\n        <p-column field=\"engineer\" header=\"Engineer\"></p-column>\n        <p-column field=\"competency\" header=\"Compet Serv Area\"></p-column>\n        <p-column field=\"subDomain\" header=\"SubDomain\"></p-column>\n    </p-dataTable>\n</div>\n",
        styleUrls: [
            "../node_modules/primeng/resources/primeng.min.css",
            "../node_modules/primeng/resources/themes/omega/theme.css",
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ActivitiesComponent);
exports.default = ActivitiesComponent;
//# sourceMappingURL=activities.component.js.map