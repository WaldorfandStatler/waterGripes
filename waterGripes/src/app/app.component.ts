import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Water Gripes';
  user = sessionStorage.user;
  // saveUserSession: function (user, token) {
  //    sessionStorage.setItem(user, token);
  // }
}
