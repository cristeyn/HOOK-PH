import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, UserCredential, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { BehaviorSubject, from, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUser?: Observable<UserCredential | null>;
    private currentUserSubject?: BehaviorSubject<UserCredential | null>;


    constructor(private http: HttpClient, private auth: Auth) {
        this.currentUserSubject = new BehaviorSubject<UserCredential | null>(JSON.parse(<string>localStorage.getItem('hoo-ph-app-user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    loginWithGmail(){
      return signInWithPopup(this.auth, new GoogleAuthProvider).then(e=>{
            if(e){
                this.currentUserSubject?.next(e);
                localStorage.setItem('hoo-ph-app-user', JSON.stringify(this.currentUserSubject?.value));
            }
            return e;
        });
    }
    loginWithFacebook(){
        return signInWithPopup(this.auth, new FacebookAuthProvider).then(e=>{
              if(e){
                  this.currentUserSubject?.next(e);
                  localStorage.setItem('hoo-ph-app-user', JSON.stringify(this.currentUserSubject?.value));
              }
              return e;
          });
      }
    loginWithEmailAndPassword(email: string, psasword: string){
        return signInWithEmailAndPassword(this.auth, email, psasword).then(e=>{
              if(e){
                  if(e.user.emailVerified){
                      this.currentUserSubject?.next(e);
                        localStorage.setItem('hoo-ph-app-user', JSON.stringify(this.currentUserSubject?.value));
                  }
                  
              }
              return e;
          });
      }
    signUpWithEmailAndPassword(email: string, password: string, fullname: string){
        return createUserWithEmailAndPassword(this.auth,email,password).then(s=>{
            updateProfile(s.user,{displayName: fullname}).then(s=>{
                this.auth.signOut();
            });
            return s;
        });
    }
  
    sendPasswordResetEmail(email: string){
       return sendPasswordResetEmail(this.auth, email);
    }
    sendAccountVerificationEmail(u: UserCredential){
        
        return sendEmailVerification(u.user);
         
    }
    public get currentUserObservable(): Observable<UserCredential>{
        return <Observable<UserCredential>>this.currentUser;
    }
    public get currentUserValue(): UserCredential {
        return <UserCredential>this.currentUserSubject?.value;
    }
    
    logout() {
        // remove user from local storage to log user out
       
        this.auth.signOut();
        localStorage.removeItem('hoo-ph-app-user');
        this.currentUserSubject?.next(null);
    }
}