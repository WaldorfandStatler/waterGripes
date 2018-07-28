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

export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService ) {}

  ngOnInit() {
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

    if (socialPlatform === 'google') {
      const PROVIDER_ID = 'watergripes';
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
        // ...
        sessionStorage.setItem('user', userData.token);
        console.log(sessionStorage);
<<<<<<< HEAD
      }
    );
  }


=======

      }
    );
  }
}
 }
>>>>>>> d9c4e866c4827b913598b7bd6049cf784c4ae80a
