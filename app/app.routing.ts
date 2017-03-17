import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './notfound.component';


export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent }
]);
