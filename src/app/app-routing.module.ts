import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORTACION DE COMPONENTES COMO PAGINAS INDEPENDIENTES
import { HomeComponent } from './components/pages/home/home.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { EmdrinfoComponent } from './components/pages/emdrinfo/emdrinfo.component';
import { TestimonysComponent } from './components/pages/testimonys/testimonys.component';
import { ContactmeComponent } from './components/pages/contactme/contactme.component';
import { ThanksPageFormComponent } from './components/thanks-page-form/thanks-page-form.component';
import { ServicesComponent } from './components/page/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'EMDRinfo', component: EmdrinfoComponent },
  { path: 'testimonys', component: TestimonysComponent },
  { path: 'login', component: LoginComponent },
  { path: 'protected/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  { path: 'services', component: ServicesComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: 'thanksPageForm/:name/:comPreference/:time', component: ThanksPageFormComponent },

  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' 
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
