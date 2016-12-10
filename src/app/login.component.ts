import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  
  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({provider})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInAnonymously(): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    })
    .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error))
    .then(() => this.postSignIn());
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google)
    .then(() => this.postSignIn());
  }

  // signOut(): void {
  //   this.af.auth.logout();
  // }

  private postSignIn(): void {
    this.router.navigate(['/dashboard']);
  }
}

