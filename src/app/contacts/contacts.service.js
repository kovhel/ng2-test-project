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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var R = require("ramda/index");
var ContactsService = (function () {
    function ContactsService(http) {
        var _this = this;
        this.http = http;
        this.contacts$ = new BehaviorSubject_1.BehaviorSubject([]);
        this.dataUrl = 'https://starwars-json-server-ewtdxbyfdz.now.sh/people';
        http.get(this.dataUrl)
            .map(function (response) { return response.json(); })
            .subscribe(function (value) {
            _this.contacts$.next(value);
        });
    }
    ContactsService.prototype.getContacts = function () {
        return this.contacts$;
    };
    ContactsService.prototype.getContactById = function (id) {
        var getById = R.find(R.propEq('id', id));
        var contact$ = new BehaviorSubject_1.BehaviorSubject(getById(this.contacts$.getValue()) || {});
        this.contacts$
            .subscribe(function (value) {
            contact$.next(getById(value));
        });
        return contact$;
    };
    ContactsService.prototype.deleteContact = function (contact) {
        this.contacts$.next(R.without([contact], this.contacts$.getValue()));
    };
    return ContactsService;
}());
ContactsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactsService);
exports.default = ContactsService;
//# sourceMappingURL=contacts.service.js.map