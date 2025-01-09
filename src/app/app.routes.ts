import { Routes } from '@angular/router';
import { DefaultRouteComponent } from './questions-answer/default-route.component';
import { SecondRouteComponent } from './signup/second-route.component';

export const routes: Routes = [
  { path: 'index', component: DefaultRouteComponent },
  { path: 'signup', component: SecondRouteComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];
