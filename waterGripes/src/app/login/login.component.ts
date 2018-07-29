import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor( 
    private socialAuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router, 
  ) {}

  ngOnInit() {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

   
        const PROVIDER_ID = 'watergripes';
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      
        this.socialAuthService.signIn(socialPlatformProvider)
          .then((userData) => {
              console.log(socialPlatform + ' sign in data : ' , userData);
              // Now sign-in with userData
              // ...
              sessionStorage.setItem('user', userData.token);
              console.log(sessionStorage);
            })
              .then(() => {
                console.log('launch redirect')
              })
              .catch(err => console.error(err));
          
    }
<<<<<<< HEAD
=======

>>>>>>> a17e86bb62a24a45be13304ff0f42a72f72fda52
  }

  
}
