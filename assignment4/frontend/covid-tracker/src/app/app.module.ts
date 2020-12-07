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
import { TrackComponent } from './track/track.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleLecturesComponent,
    NavigationComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'schedule', component: ScheduleLecturesComponent },
      {path: 'login', component: DashboardComponent },
      {path: 'search', component: SearchComponent},
      {path: 'home', component: LandingComponent },
      {path: 'track', component: TrackComponent}

    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
