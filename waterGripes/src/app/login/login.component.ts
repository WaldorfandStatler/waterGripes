import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { from } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';

import { GripeService } from '../gripe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  userHome: '/userHome';

  constructor( 
    private socialAuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private gripeService: GripeService, 
  ) {}
  
  ngOnInit() {}

  public socialSignIn(socialPlatform: string) {
    
    const login = this;

    const PROVIDER_ID = 'watergripes';

    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    const user = from(this.socialAuthService.signIn(socialPlatformProvider));
    user.subscribe({
      next(userData) { 
        console.log(userData);
        console.log(`${socialPlatform} sign in data : ${userData}`); 
        sessionStorage.setItem('user', userData.token); // Now sign-in with userData
        console.log(sessionStorage);
        login.gripeService.addUser(userData)
          
      },
      error(err) { console.error('Error: ' + err); },
      complete() { 
        console.log('Completed');
        login.signedInCheck();
      }
    });
          
  }

  private signedInCheck() {
    if (sessionStorage.user) {
      this.router.navigate(['/userHome'])
      console.log('user logged in');

    }
  }


}

  

