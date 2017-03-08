import { Component } from '@angular/core';

@Component({
  selector: 'flurries',
  template: `
    <div class="icon flurries">
      <div class="cloud"></div>
      <div class="snow">
        <div class="flake"></div>
        <div class="flake"></div>
      </div>
    </div>
  `
})
export class FlurriesComponent {
}
