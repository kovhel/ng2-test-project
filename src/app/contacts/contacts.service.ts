import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as R from 'ramda/index';

@Injectable()

export default class ContactsService {
    contacts$ = new BehaviorSubject([]);
    dataUrl: string = 'https://starwars-json-server-ewtdxbyfdz.now.sh/people';

    constructor(private http: Http) {
        http.get(this.dataUrl)
            .map(response => response.json())
            .subscribe((value) => {
                this.contacts$.next(value);
            });
    }

    getContacts() {
        return this.contacts$;
    }

    getContactById(id) {
        let getById = R.find(R.propEq('id', id));
        let contact$ = new BehaviorSubject(
            getById(this.contacts$.getValue()) || {}
        );
        this.contacts$
            .subscribe(value => {
                contact$.next(getById(value));
            });
        return contact$;
    }

    deleteContact(contact) {
        this.contacts$.next(R.without([contact], this.contacts$.getValue()));
    }
}
