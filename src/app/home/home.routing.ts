import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupFamilyComponent } from './group-family/group-family.component';
import { GroupTeamComponent } from './group-team/group-team.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TrainingListComponent } from './training-list/training-list.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes =[
  { 
    path: 'home', component: HomeComponent, canActivate: [ AuthGuard ],
    children: [
      { path: 'dashboard',              component: DashboardComponent },
      { path: 'users',                  component: UserListComponent },
      { path: 'users/:group/:id',       component: UserListComponent },
      { path: 'user/:mode/:id',         component: UserComponent },
      { path: 'groups',                 component: GroupListComponent },
      { path: 'group-family/:mode/:id', component: GroupFamilyComponent },  /**mode: new/update/detail */
      { path: 'group-team/:mode/:id',   component: GroupTeamComponent },    /** " */
      { path: 'messages',               component: MessageListComponent },
      { path: 'images',                 component: ImageListComponent },
      { path: 'trainings',              component: TrainingListComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
