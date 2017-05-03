import { RouterModule } from '@angular/router';

import ContactsListComponent from './contacts-list.component';
import ContactsDetailsComponent from './contacts-details.component';

const routes = [
    { path: '', component: ContactsListComponent },
    { path: ':id', component: ContactsDetailsComponent },
];

export default RouterModule.forChild(routes);
