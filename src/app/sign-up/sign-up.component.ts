import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth-service';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private _auth: AuthService, private router: Router) {
    this.user = afAuth.authState;
  }

  signUp(email: string, password: string) {
    this._auth.signUp(email, password);
  }
}
