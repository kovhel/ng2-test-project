import {Component, Input} from '@angular/core';
import ContactsService from "./contacts.service";
import ContactsListItemComponent from './contacts-list-item.component';

@Component({
    template: `
        <table>
            <caption>StarWars' Heroes</caption>
            <tr>
               <td *ngFor="let field of contactFields">{{field.title}}</td>   
               <td>Edit</td>
               <td>Delete</td>
            </tr>
            <contacts-list-item
                *ngFor="let contact of (contacts$ | async)"
                [contact]="contact"
                [fields]="contactFields"
                (deleteContact)="contactsService.deleteContact(contact)"
                style="display: table-row"
                >
            </contacts-list-item>
        </table>
`
})

export default class ContactsListComponent {
    contacts$;
    contactFields = [
        {field: 'name', title: 'Name'},
        {field: 'gender', title: 'Gender'},
        {field: 'birth_year', title: 'Birth Year'},
    ];
    constructor(private contactsService: ContactsService) {
        this.contacts$ = contactsService.getContacts();
    }
}
