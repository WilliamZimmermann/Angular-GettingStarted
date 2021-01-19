import { Component } from '@angular/core';

import * as LogRocket from 'logrocket';
LogRocket.init('r5qdjt/angular-course');

// This is an example script - don't forget to change it!
LogRocket.identify('1', {
  name: 'SUP',
  email: 'zimmermann.william@outlook.com',
  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle: string = 'Angular: Getting Started';
}
