import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ServicesComponent } from './components/services/services.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactInformationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
