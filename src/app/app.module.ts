import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ServicesComponent } from './components/services/services.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactInformationComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    AboutComponent,
    QuestionsComponent,
    NotificationsComponent,
    ServicesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    FontAwesomeModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
  ],
  exports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
