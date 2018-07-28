import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

<<<<<<< HEAD
=======

>>>>>>> e978abddfbaff24abf280e49b7a0f8ac69b19d48
export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService ) {}

  ngOnInit() {
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
<<<<<<< HEAD

    if (socialPlatform === 'google') {
      const PROVIDER_ID = 'watergripes';
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
=======
    // if (socialPlatform === 'facebook') {
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // } else
    if (socialPlatform === 'google') {
      const PROVIDER_ID = 'watergripes';
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // } else if (socialPlatform === 'linkedin') {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // }

>>>>>>> e978abddfbaff24abf280e49b7a0f8ac69b19d48
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
        // ...
        sessionStorage.setItem('user', userData.token);
        console.log(sessionStorage);
<<<<<<< HEAD
=======
        
      }
    );



  }
>>>>>>> e978abddfbaff24abf280e49b7a0f8ac69b19d48

      }
    );
  }
}
<<<<<<< HEAD
=======

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

>>>>>>> e978abddfbaff24abf280e49b7a0f8ac69b19d48
 }
