import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentHomeComponent } from './parent-home/parent-home.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [

  {path:'',component:ParentHomeComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'children',component:ChildrensComponent},
    {path:'profile',component:ProfileComponent},
    
    
  ]
},
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
