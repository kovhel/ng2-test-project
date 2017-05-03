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
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var forms_1 = require("@angular/forms");
var ContactsDetailsComponent = (function () {
    function ContactsDetailsComponent(contactsService, route) {
        this.contactsService = contactsService;
        this.route = route;
        // contact$;
        this.officeForm = new forms_1.FormGroup({
            officeName: new forms_1.FormControl(''),
            isInUSA: new forms_1.FormControl(false),
            bosses: new forms_1.FormArray([]),
            workers: new forms_1.FormArray([
                this.getNewWorker(),
            ])
        });
        // pre-defined options
        this.workersSex = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
        this.languages = [{ name: 'Node', value: 'node' }, { name: 'ES6', value: 'es6' }, { name: 'ES5', value: 'es5' }, { name: 'TypeScript', value: 'tsc' }];
        /* route.params
            .map(params => params.id)
            .subscribe(id => {
                this.contact$ = contactsService.getContactById(parseInt(id));
            });*/
    }
    ContactsDetailsComponent.prototype.getNewWorker = function () {
        return new forms_1.FormGroup({
            sex: new forms_1.FormControl('male'),
            name: new forms_1.FormControl(''),
            language: new forms_1.FormControl('js'),
        });
    };
    ContactsDetailsComponent.prototype.getNewBoss = function () {
        return new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
        });
    };
    ContactsDetailsComponent.prototype.onAddWorker = function () {
        this.officeForm.controls.workers.push(this.getNewWorker());
    };
    ContactsDetailsComponent.prototype.onAddBoss = function () {
        this.officeForm.controls.bosses.push(this.getNewBoss());
    };
    ContactsDetailsComponent.prototype.onRemoveBoss = function (index) {
        this.officeForm.controls.bosses.removeAt(index);
    };
    ContactsDetailsComponent.prototype.onRemoveWorker = function (index) {
        this.officeForm.controls.workers.removeAt(index);
    };
    ContactsDetailsComponent.prototype.show = function (value) {
        console.log(value);
    };
    return ContactsDetailsComponent;
}());
ContactsDetailsComponent = __decorate([
    core_1.Component({
        template: "\n        <!--<span>{{contact$ | async | json}}</span>-->\n         \n        <div class=\"container\">\n            <form [formGroup]=\"officeForm\">\n                <div class=\"form-group\">\n                    <label for=\"officeName\">Office name</label>\n                    <input\n                        type=\"text\"\n                        id=\"officeName\"\n                        formControlName=\"officeName\"\n                        class=\"form-control\"\n                     />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"officeLocation\">Is office in USA</label>\n                    <input\n                        type=\"checkbox\"\n                        id=\"officeLocation\"\n                        formControlName=\"isInUSA\"\n                        class=\"form-control\"\n                     />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"bossesList\">Bosses' names</label><br>\n                    <div\n                        id=\"bossesList\"\n                        formArrayName=\"bosses\"\n                    >\n                        <div *ngFor=\"let boss of officeForm.controls.bosses.controls; let i=index\">\n                            <div [formGroupName]=\"i\">\n                                <input\n                                    type=\"text\"\n                                    formControlName=\"name\"\n                                    class=\"form-control\"\n                                 />\n                                <button (click)=\"onRemoveBoss(i)\">X</button>\n                            </div>\n                        </div> \n                    </div>\n                    <button (click)=\"onAddBoss()\">Add Boss</button>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"workersList\">Workers</label><br>\n                    <div\n                        id=\"workersList\"\n                        formArrayName=\"workers\"\n                    >\n                        <div *ngFor=\"let worker of officeForm.controls.workers.controls; let i=index\">\n                             <div [formGroupName]=\"i\" class=\"form-group\">\n                                <label for=\"removeWorker\">Remove worker</label>\n                                <button id=\"removeWorker\" (click)=\"onRemoveWorker(i)\">X</button>\n                                <hr>\n                                <div *ngFor=\"let sex of workersSex\">\n                                    <input\n                                         type=\"radio\"\n                                         [id]=\"'sex' + i\"\n                                         [attr.name]=\"'sex' + i\"\n                                         formControlName=\"sex\"\n                                         [value]=\"sex.value\"\n                                         class=\"form-control\"\n                                     />\n                                     <label [attr.for]=\"'sex' + i\">{{sex.name}}</label>\n                                 </div>\n                                <label for=\"name\">Worker Name</label>\n                                <input\n                                    id=\"name\"\n                                    type=\"text\"\n                                    formControlName=\"name\"\n                                    class=\"form-control\"\n                                 /><br>\n                                <label for=\"language\">Worker Language</label>\n                                <select\n                                    formControlName=\"language\"\n                                    id=\"language\"\n                                    class=\"form-control\"\n                                >\n                                    <option\n                                        *ngFor=\"let language of languages\"\n                                        [value]=\"language.value\"\n                                     >{{language.name}}</option>\n                                </select><br>\n                            </div>\n                            <button (click)=\"onAddWorker()\">Add Worker</button><br><br>\n                        </div>\n                    </div>\n                </div>\n                <button (click)=\"show(officeForm.value)\">Show in console</button>\n            </form>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [contacts_service_1.default, router_1.ActivatedRoute])
], ContactsDetailsComponent);
exports.default = ContactsDetailsComponent;
//# sourceMappingURL=contacts-details.component.js.map