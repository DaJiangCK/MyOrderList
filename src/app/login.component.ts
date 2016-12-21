import { Component, OnInit } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(public auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    // console.log("===========" + this.auth.authenticated);
    // if(this.auth.authenticated){
    //   this.postSignIn();
    // }
  }

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/dashboard']);
  }
}

