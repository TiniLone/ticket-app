import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../providers/auth-service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public _auth: AuthService, private router: Router) {
    this.user = afAuth.authState;
  }

  authenticated(): boolean {
    console.log('Dash : ' + this._auth.authenticated);
    console.log('Dash u : ' + this.user);
    return this._auth.authenticated;
  }

  signOut(): void {
    this._auth.signOut();
  }
}
