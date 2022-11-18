import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  displayName = new FormControl('');
  email = new FormControl('');
  photoURL = new FormControl('');
  // phoneNumber = new FormControl('');
  password = new FormControl('');
  user!: any;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.currentUser.then(user => {
      this.user = user;
      this.displayName.setValue('' + user?.displayName);
      this.email.setValue('' + user?.email);
      // this.phoneNumber.setValue('' + user?.phoneNumber)
      this.photoURL.setValue('' + user?.photoURL);
    })
  }

  save() {
    const profile = {
      displayName: this.displayName.value,
      photoURL: this.photoURL.value
    }
    this.user.updateProfile(profile)
    // this.user.updatePhoneNumber(this.phoneNumber)
    this.user.updateEmail(this.email)
  }

  savePassword() {
    this.user.updatePassword(this.password);
  }

}
