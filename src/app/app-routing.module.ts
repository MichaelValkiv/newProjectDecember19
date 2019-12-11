import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }