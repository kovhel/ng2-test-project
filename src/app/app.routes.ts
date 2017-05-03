import { RouterModule } from '@angular/router';

const routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'contacts', loadChildren: 'app/contacts/contacts.module' },
    { path: 'activities', loadChildren: 'app/activities/activities.module' },
];

export default RouterModule.forRoot(routes);
