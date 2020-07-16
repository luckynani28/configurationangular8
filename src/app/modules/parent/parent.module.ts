import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { ParentSidenavComponent } from './parent-sidenav/parent-sidenav.component';
// import { HeaderComponent } from '../../core/header/header.component';
// import { HomeComponent } from '../../core/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    ProfileComponent, 
    ChildrensComponent,
    ParentHomeComponent,
    ParentSidenavComponent,
    // HomeComponent
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
