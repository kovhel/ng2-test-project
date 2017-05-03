import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from '@angular/http';
import {SharedModule} from "primeng/components/common/shared";
import {DataTableModule} from 'primeng/components/datatable/datatable';

import activitiesRoutes from './activities.routes';
import ActivitiesComponent from './activities.component';
import ActivitiesService from "./activities.service";

@NgModule({
    imports: [CommonModule, HttpModule, activitiesRoutes, SharedModule, DataTableModule],
    declarations: [ActivitiesComponent],
    providers: [ActivitiesService],
})
export default class ActivitiesModule {}
