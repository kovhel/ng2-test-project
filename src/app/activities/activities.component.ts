import {Component, ViewEncapsulation} from '@angular/core';

interface Activity {
    id: string;
    site: string;
    startDate: Date;
    dueDate: Date;
    status: string;
    engineer: string;
    competency: string;
    subDomain: string;
}

@Component({
    template: `
<div>
    <h3>Activities</h3>
    <p-dataTable [value]="activities" [rows]="5" [paginator]="true">
        <p-column field="id" header="ActivityID"></p-column>
        <p-column field="site" header="Site"></p-column>
        <p-column field="startDate" header="Start Date"></p-column>
        <p-column field="dueDate" header="Due Date"></p-column>
        <p-column field="status" header="Status"></p-column>
        <p-column field="engineer" header="Engineer"></p-column>
        <p-column field="competency" header="Compet Serv Area"></p-column>
        <p-column field="subDomain" header="SubDomain"></p-column>
    </p-dataTable>
</div>
`,
    styleUrls : [
        "../node_modules/primeng/resources/primeng.min.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
    ],
    encapsulation: ViewEncapsulation.None
})

export default class ActivitiesComponent {
    activities: Activity[] = [];

    constructor() {
        for (let i = 1; i < 10; ++i) {
            this.activities.push(<Activity>{
                id: `proj00${i}-001-001-001-M320`,
                site: 'site',
                startDate: new Date(),
                dueDate: new Date(),
                status: 'dispatched',
                engineer: '',
                competency: '-',
                subDomain: '-'
            });
        }
    }
}
