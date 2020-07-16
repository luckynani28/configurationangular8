import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { StudentsListComponent } from './students-list/students-list.component';


@NgModule({
  declarations: [DashboardComponent, TeacherProfileComponent, StudentsListComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
