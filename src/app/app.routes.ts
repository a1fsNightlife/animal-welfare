import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: '**', redirectTo: 'overview' },
];
