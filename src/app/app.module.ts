import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactInformationComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule
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
