import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from '@angular/http';

import contactsRoutes from './contacts.routes';
import ContactsListComponent from './contacts-list.component';
import ContactsDetailsComponent from "./contacts-details.component";
import ContactsListItemComponent from './contacts-list-item.component';
import ContactsService from "./contacts.service";

@NgModule({
    imports: [CommonModule, HttpModule, contactsRoutes],
    declarations: [ContactsListComponent, ContactsDetailsComponent, ContactsListItemComponent],
    providers: [ContactsService],
})
export default class ContactsModule {}
