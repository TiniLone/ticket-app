import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth-service';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private _auth: AuthService, private router: Router) {
    this.user = afAuth.authState;
  }

  signInAnonymously(): void {
    this._auth.signInAnonymously()
    .then(() => {
      if (this.afAuth.authState != null) {
        console.log('success');
        this.router.navigateByUrl('/dashboard');
      } else {
      }
    });
  }

  signInWithEmail(email: string, password: string): void {
    this._auth.signInWithEmail(email, password);
  }

  signInWithGoogle(): void {
    this._auth.signInWithGoogle();
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook();
  }

  private messageOnSignSuccess(message: string): void {
    console.log(message + ' successfully');
  }

  authenticated(): boolean {
    return this._auth.authenticated;
  }

  signOut(): void {
    this._auth.signOut();
  }
}
