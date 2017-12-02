import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import {HttpModule,JsonpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { routes } from './app.routes';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { LoginPageComponent } from './vinoth-component/login-page/login-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';
import { SidebarComponent } from './vinoth-component/sidebar/sidebar.component';
import { HeaderComponent } from './vinoth-component/header/header.component';
import { FooterComponent } from './vinoth-component/footer/footer.component';
import { BannerInlineComponent } from './testing-component/banner-inline/banner-inline.component';
import { WelcomeComponent } from './testing-component/welcome/welcome.component';
import { TwainComponent } from './testing-component/twain/twain.component';
import { DashboardModule } from './testing-component/dashboard/dashboard.module';
import { SharedModule } from './testing-component/shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    SampleFirstComponent,
    LandingPageComponent,
    LoginPageComponent,
    DashBoardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    BannerInlineComponent,
    WelcomeComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    JsonpModule,
    DashboardModule,
    SharedModule     
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
