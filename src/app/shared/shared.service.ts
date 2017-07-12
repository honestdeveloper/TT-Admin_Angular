import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';


@Injectable()
export class SharedService {

  constructor(
    private af : AngularFire
  ) {}

  /**
   * get all users
   */
  get allUsers(): FirebaseListObservable<any> {
    return this.af.database.list('/users');
  }

  /**
   * get pending users
   */
  get pendingUsers(): FirebaseListObservable<any> {
    return this.af.database.list('users-pending');
  }

  /**
   * get user by id
   */
  getUser(uid: string): FirebaseObjectObservable<any> {
    return this.af.database.object('users/' + uid);
  }

  /**
   * get all teams
   */
  get allTeams(): FirebaseListObservable<any> {
    return this.af.database.list('teams/');
  }

  /**
   * get team by id
   */
  getTeam(tid: string): FirebaseObjectObservable<any> {
    return this.af.database.object('teams/' + tid);
  }

  /**
   * get all families
   */
  get allFamilies(): FirebaseListObservable<any> {
    return this.af.database.list('families/');
  }

  /**
   * get family by id
   */
  getFamily(fid: string): FirebaseObjectObservable<any> {
    return this.af.database.object('families/' + fid);
  }

  /**
   * get all messages
   */
  get allMessages() {
    return this.af.database.list('messages/').map(messages => {
      return messages.map(message => {
        message.userFrom = this.af.database.object('users/' + message.from);
        message.userTo   = this.af.database.object('users/' + message.to);
        
        return message;
      });
    });
  }

  /**
   * get all images
   */
  get allImages(): FirebaseListObservable<any> {
    return this.af.database.list('team_pictures/');
  }

  /**
   * show message
   */
  showMessage(message: string): void {
    console.log(message);
  }
}
