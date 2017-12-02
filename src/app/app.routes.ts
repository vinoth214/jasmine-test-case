import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { LoginPageComponent } from './vinoth-component/login-page/login-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';




export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing',  component: LandingPageComponent } ,
  { path: 'login',component:LoginPageComponent},
  { path: 'sample',component:SampleFirstComponent},
  { path: 'dashBoard',component:DashBoardComponent},  
];