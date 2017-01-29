import {
  Component
} from '@angular/core';

@Component({
  selector: 'about',
  styles: [`
    .about-content {
      padding: 32px;
    }
  `],
  template: `
    <div class="about-content">
      <h1>About</h1>
      <div>
        This is an implementation of a test task to create a contract list SPA with Angular 2.
      </div>
    </div>
  `
})
export class AboutComponent { }
