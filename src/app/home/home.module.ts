import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { CKEditorModule } from 'ng2-ckeditor';

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

import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../shared/shared.module';

import { FamilyService } from './group-family/family.service';
import { TeamService } from './group-team/team.service';
import { UserService } from './user/user.service';
import { TrainingService } from './training-list/training.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    CKEditorModule,

    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    DashboardComponent, 
    UserComponent, 
    UserListComponent, 
    GroupListComponent,
    GroupFamilyComponent, 
    GroupTeamComponent, 
    MessageListComponent, 
    ImageListComponent, 
    TrainingListComponent,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    FamilyService,
    TeamService,
    UserService,
    TrainingService,
  ]
})
export class HomeModule { }
