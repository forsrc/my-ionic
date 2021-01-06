import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        RouterModule,
        CommonModule,
        IonicModule
    ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
})
export class NavBarModule {
}
