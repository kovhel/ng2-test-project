import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app',
  template: `
    <style>
        a {
            text-decoration: none;
            text-transform: uppercase;
        }
        a.active {
            font-weight: bold;
        }
    </style>
    <nav>
        <a
            *ngFor="let item of navigationItems"
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
        >
        {{item.name}}
        </a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent  {
  navigationItems: Array<Object> = [
      { route: '', name: 'home' },
      { route: 'contacts', name: 'contacts' },
  ];

    constructor(private router: RouterModule){}
}
