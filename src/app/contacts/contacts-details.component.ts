import {Component} from "@angular/core";
import ContactsService from "./contacts.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import {FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
    template: `
        <!--<span>{{contact$ | async | json}}</span>-->
         
        <div class="container">
            <form [formGroup]="officeForm">
                <div class="form-group">
                    <label for="officeName">Office name</label>
                    <input
                        type="text"
                        id="officeName"
                        formControlName="officeName"
                        class="form-control"
                     />
                </div>
                <div class="form-group">
                    <label for="officeLocation">Is office in USA</label>
                    <input
                        type="checkbox"
                        id="officeLocation"
                        formControlName="isInUSA"
                        class="form-control"
                     />
                </div>
                <div class="form-group">
                    <label for="bossesList">Bosses' names</label><br>
                    <div
                        id="bossesList"
                        formArrayName="bosses"
                    >
                        <div *ngFor="let boss of officeForm.controls.bosses.controls; let i=index">
                            <div [formGroupName]="i">
                                <input
                                    type="text"
                                    formControlName="name"
                                    class="form-control"
                                 />
                                <button (click)="onRemoveBoss(i)">X</button>
                            </div>
                        </div> 
                    </div>
                    <button (click)="onAddBoss()">Add Boss</button>
                </div>
                <div class="form-group">
                    <label for="workersList">Workers</label><br>
                    <div
                        id="workersList"
                        formArrayName="workers"
                    >
                        <div *ngFor="let worker of officeForm.controls.workers.controls; let i=index">
                             <div [formGroupName]="i" class="form-group">
                                <label for="removeWorker">Remove worker</label>
                                <button id="removeWorker" (click)="onRemoveWorker(i)">X</button>
                                <hr>
                                <div *ngFor="let sex of workersSex">
                                    <input
                                         type="radio"
                                         [id]="'sex' + i"
                                         [attr.name]="'sex' + i"
                                         formControlName="sex"
                                         [value]="sex.value"
                                         class="form-control"
                                     />
                                     <label [attr.for]="'sex' + i">{{sex.name}}</label>
                                 </div>
                                <label for="name">Worker Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    formControlName="name"
                                    class="form-control"
                                 /><br>
                                <label for="language">Worker Language</label>
                                <select
                                    formControlName="language"
                                    id="language"
                                    class="form-control"
                                >
                                    <option
                                        *ngFor="let language of languages"
                                        [value]="language.value"
                                     >{{language.name}}</option>
                                </select><br>
                            </div>
                            <button (click)="onAddWorker()">Add Worker</button><br><br>
                        </div>
                    </div>
                </div>
                <button (click)="show(officeForm.value)">Show in console</button>
            </form>
        </div>
    `,
})

export default class ContactsDetailsComponent {
    // contact$;
    officeForm = new FormGroup({
        officeName: new FormControl(''),
        isInUSA: new FormControl(false),
        bosses: new FormArray([]),
        workers: new FormArray([
            this.getNewWorker(),
        ])
    });
    // pre-defined options
    workersSex = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
    languages = [{ name: 'Node', value: 'node' }, { name: 'ES6', value: 'es6' }, { name: 'ES5', value: 'es5' }, { name: 'TypeScript', value: 'tsc' }];

    constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
        /* route.params
            .map(params => params.id)
            .subscribe(id => {
                this.contact$ = contactsService.getContactById(parseInt(id));
            });*/
    }
    getNewWorker() {
        return new FormGroup({
            sex: new FormControl('male'),
            name: new FormControl(''),
            language: new FormControl('js'),
        });
    }
    getNewBoss() {
        return new FormGroup({
            name: new FormControl(''),
        })
    }
    onAddWorker(){
        this.officeForm.controls.workers.push(this.getNewWorker());
    }
    onAddBoss(){
        this.officeForm.controls.bosses.push(this.getNewBoss());
    }
    onRemoveBoss(index){
        this.officeForm.controls.bosses.removeAt(index);
    }
    onRemoveWorker(index){
        this.officeForm.controls.workers.removeAt(index);
    }
    show(value) {
        console.log(value);
    }
}
