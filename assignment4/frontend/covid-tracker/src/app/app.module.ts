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
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScheduleLecturesComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'schedule', component: ScheduleLecturesComponent },
      {path: 'login', component: DashboardComponent },
      {path: 'search', component: SearchComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
