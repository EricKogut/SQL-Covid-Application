import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleLecturesComponent } from './schedule-lectures/schedule-lectures.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleLecturesComponent,
    NavigationComponent,
    SearchComponent,
    LoginComponent,
    EnrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent },
      {path: 'schedule', component: ScheduleLecturesComponent },
      {path: 'login', component: LoginComponent },
      {path: 'search', component: SearchComponent},
      {path: 'enroll', component: EnrollComponent}



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
