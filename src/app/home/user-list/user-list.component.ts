import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList   : any;
  pendingList: any;
  loading    : boolean;

  constructor(
    private sharedService: SharedService
  ) {
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.userList = this.sharedService.allUsers;
    this.userList.subscribe(_=> {
      this.loading =false;
      this.pendingList = this.sharedService.pendingUsers;
    });
    
  }
}
