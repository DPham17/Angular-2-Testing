import { Component } from '@angular/core';

@Component({
  selector: 'thunder',
  template: `
  <div class="icon thunder-storm">
    <div class="cloud"></div>
    <div class="lightning">
      <div class="bolt"></div>
      <div class="bolt"></div>
    </div>
  </div>
  `
})
export class ThunderComponent {
}
