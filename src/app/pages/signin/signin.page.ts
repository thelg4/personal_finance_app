import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TestBed } from '@angular/core/testing';

// import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  // email: string = "test@gmail.com";
  // password: string = "password";

  user= {email:"test@gmail.com", password:"strongpassword"}


  constructor(private router: Router, 
                public firebase: AngularFirestore, 
                public afAuth: AngularFireAuth,
                private fbService: FirebaseService) { }

  ngOnInit() {
  }

  logInWithEmail(email: string, password: string)  {
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      //navigate to user profile
      console.log(user.user.email, user.user.uid);
      this.fbService.loadMyData();

      var user1 = firebase.auth().currentUser;
      console.log(user1.uid)
      this.fbService.setUID(user.user.uid);
      // fbService
      var db = firebase.firestore();
      var self=this;
      db.collection("usertype").where("uid", "==", user1.uid)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshot
                    console.log(doc.id, " => ", doc.data());
                    var type = doc.data().usertype;
                    console.log("usertype:"+type);
                    self.fbService.setUserType(type);
                    if(type == 'owner') {
                      self.fbService.isOwner = true;
                    }
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            //this.router.navigate(["/product-list"])
            //this.router.navigate(["/"])
            this.router.navigateByUrl('/');
          });
  }

  // loginWithFacebook() {

  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase.auth().signInWithRedirect(provider);
  //   var self=this;
  //   firebase.auth()
  //     .getRedirectResult()
  //     .then((result) => {
  //       if (result.credential) {
  //         /** @type {firebase.auth.OAuthCredential} */
  //         var credential = result.credential;

  //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //         // var token = credential.accessToken;
  //         // ...
  //       }
  //       // The signed-in user info.
  //       var user = result.user;
  //       console.log(user)
  //       self.fbService.setUID(user.uid);
  //       this.fbService.loadMyData();
  //       this.router.navigateByUrl('/');

  //     }).catch((error) => {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // The email of the user's account used.
  //       var email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       var credential = error.credential;
  //       // ...
  //     });

  // }

  loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var self=this;
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
      console.log(user)
          self.fbService.setUID(user.uid);
          self.fbService.loadMyData();
          self.fbService.setUserType("visitor");
        this.router.navigateByUrl('/');

    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
}
