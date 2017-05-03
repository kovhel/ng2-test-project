import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'contacts-list-item',
    template: `
         <td *ngFor="let field of fields">{{contact[field.field]}}</td>   
         <td><button [routerLink]="contact.id">Edit</button></td>
         <td><button (click)="deleteContact.emit(contact.id)">Delete</button></td>
`,
})

export default class ContactsListItemComponent {
    @Input() fields;
    @Input() contact;
    @Output() deleteContact = new EventEmitter();
}
