import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <md-toolbar>
      <a md-button color="primary" [routerLink]=" ['./home'] " routerLinkActive="active-nav">
        Home
      </a>
      <a md-button color="primary" [routerLink]=" ['./about'] " routerLinkActive="active-nav">
        About
      </a>
    </md-toolbar>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent  { }
