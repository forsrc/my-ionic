import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        HomeRoutingModule,
        IonicModule
    ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
