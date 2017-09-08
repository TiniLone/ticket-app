import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  signUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  get authenticated(): boolean {
    console.log('' + this.currentUser != null)
    return this.currentUser != null;
  }

  signInAnonymously(): firebase.Promise<any> {
    return this.afAuth.auth.signInAnonymously();
  }

  signInWithEmail(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
