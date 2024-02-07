import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaMainLayoutComponent } from './la-main-layout/la-main-layout.component';
import { LaSidebarComponent } from './la-sidebare/la-sidebar.component';
import { LaTopbarComponent } from './la-topbare/la-topbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { SharedModule } from '../shared/shared.module';
import { BadgeModule } from 'primeng/badge';

import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [LaMainLayoutComponent, LaSidebarComponent, LaTopbarComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarModule,
    AvatarModule,
    ButtonModule,
    ImageModule,
    RouterLink,
    SharedModule,
    BadgeModule,
    StyleClassModule,
    InputTextModule,
  ],
})
export class LayoutsModule {}
