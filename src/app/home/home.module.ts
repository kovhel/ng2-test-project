import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import homeRoutes from './home.routes';
import HomeComponent from './home.component';

@NgModule({
    imports: [CommonModule, homeRoutes],
    declarations: [HomeComponent],
})
export default class HomeModule {}
