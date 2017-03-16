import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home-page.component';
import { ServiceComponent } from './service/service.component';


export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
]);
