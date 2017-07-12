import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(state=> {
      if(state !== null) {
        this.location.back();
      }
    });
  }

  /**
   * sign in with facebook
   */
  onSignInWithFacebook() {
    this.authService.signInWithFacebook()
          .then((auth)=> {
            this.authService.isAdminUser(auth.uid).subscribe(res => {
              if (res) {
                this.router.navigate(['/home/dashboard'], {relativeTo: this.route});
              } else {
                alert('Sorry, you\'re not allowed to login this app, please contact to administrator.');
                this.authService.signOut();
              }
            }, (error)=> {
              console.log(error);
            })
            
          }, (error)=> {
            console.log(error);
          });
  }

  /**
   * sign in with google+
   */
  onSignInWithGoogleplus() {
    this.authService.signInWithGoogleplus()
          .then((auth)=> {
            this.authService.isAdminUser(auth.uid).subscribe(res => {
              if (res) {
                this.router.navigate(['/home/dashboard'], {relativeTo: this.route});
              } else {
                alert('Sorry, you\'re not allowed to login this app, please contact to administrator.');
                this.authService.signOut();
              }
            }, (error)=> {
              console.log(error);
            })
            
          }, (error)=> {
            console.log(error);
          });
  }

}
