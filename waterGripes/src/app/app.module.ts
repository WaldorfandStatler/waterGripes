import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';//mock server

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GripeListComponent } from './gripe-list/gripe-list.component';
import { GripeListEntryComponent } from './gripe-list-entry/gripe-list-entry.component';
import { LoginComponent } from './login/login.component';
import { AddGripeComponent } from './add-gripe/add-gripe.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { GripeSearchComponent } from './gripe-search/gripe-search.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";

// Configs
export function getAuthServiceConfigs() {
  const PROVIDER_ID = 'watergripes';
  const config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider."PROVIDER_ID",
        //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('444388689542-s76dpddaenc155iv71pb5usshkvooder.apps.googleusercontent.com')
        },
        //   {
        //     id: LinkedinLoginProvider.PROVIDER_ID,
        //     provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        //   },
      ]
  );
  return config;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],

  declarations: [
    AppComponent,
    GripeListComponent,
    GripeListEntryComponent,
    LoginComponent,
    AddGripeComponent,
    UserHomeComponent,
    GripeSearchComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
