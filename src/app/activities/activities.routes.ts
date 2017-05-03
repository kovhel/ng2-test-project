import { RouterModule } from '@angular/router';

import ActivitiesComponent from './activities.component';

const routes = [
    { path: '', component: ActivitiesComponent },
];

export default RouterModule.forChild(routes);
