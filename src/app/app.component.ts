import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserProf';

  constructor(public fbAuth: AngularFireAuth) { }

  successLoginCallback(event: any) {
  }

  errorLoginCallback(event: any) {
  }
}
