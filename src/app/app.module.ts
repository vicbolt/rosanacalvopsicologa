import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor.ts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { EmdrinfoComponent } from './components/pages/emdrinfo/emdrinfo.component';
import { ContactmeComponent } from './components/pages/contactme/contactme.component';
import { TestimonysComponent } from './components/pages/testimonys/testimonys.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowtohelpComponent } from './components/howtohelp/howtohelp.component';
import { AboutmeshortComponent } from './components/aboutmeshort/aboutmeshort.component';
import { TestimonyshortComponent } from './components/testimonyshort/testimonyshort.component';
import { FormComponent } from './components/form/form.component';

import { ThanksPageFormComponent } from './components/thanks-page-form/thanks-page-form.component';
import { ServicesComponent } from './components/page/services/services.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FaqComponent } from './components/faq/faq.component';
import { EmdrshortComponent } from './components/emdrshort/emdrshort.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReviewsComponent } from './components/pages/dashboard/reviews/reviews/reviews.component';
import { CoursesComponent } from './components/pages/dashboard/courses/courses/courses.component';
import { MessagesComponent } from './components/pages/dashboard/messages/messages.component';
import { DashboardHomeComponent } from './components/pages/dashboard/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    EmdrinfoComponent,
    ContactmeComponent,
    TestimonysComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HowtohelpComponent,
    AboutmeshortComponent,
    TestimonyshortComponent,
    FormComponent,
    ThanksPageFormComponent,
    ServicesComponent,
    LoginComponent,
    QuoteComponent,
    FaqComponent,
    EmdrshortComponent,
    LoginPageComponent,
    DashboardComponent,
    ReviewsComponent,
    CoursesComponent,
    MessagesComponent,
    DashboardHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
