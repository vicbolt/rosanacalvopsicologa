import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/page/login/login.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FaqComponent } from './components/faq/faq.component';
import { EmdrshortComponent } from './components/emdrshort/emdrshort.component';

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
    EmdrshortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
