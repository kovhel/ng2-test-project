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
var contacts_service_1 = require("./contacts.service");
var ContactsListComponent = (function () {
    function ContactsListComponent(contactsService) {
        this.contactsService = contactsService;
        this.contactFields = [
            { field: 'name', title: 'Name' },
            { field: 'gender', title: 'Gender' },
            { field: 'birth_year', title: 'Birth Year' },
        ];
        this.contacts$ = contactsService.getContacts();
    }
    return ContactsListComponent;
}());
ContactsListComponent = __decorate([
    core_1.Component({
        template: "\n        <table>\n            <caption>StarWars' Heroes</caption>\n            <tr>\n               <td *ngFor=\"let field of contactFields\">{{field.title}}</td>   \n               <td>Edit</td>\n               <td>Delete</td>\n            </tr>\n            <contacts-list-item\n                *ngFor=\"let contact of (contacts$ | async)\"\n                [contact]=\"contact\"\n                [fields]=\"contactFields\"\n                (deleteContact)=\"contactsService.deleteContact(contact)\"\n                style=\"display: table-row\"\n                >\n            </contacts-list-item>\n        </table>\n"
    }),
    __metadata("design:paramtypes", [contacts_service_1.default])
], ContactsListComponent);
exports.default = ContactsListComponent;
//# sourceMappingURL=contacts-list.component.js.map