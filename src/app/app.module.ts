import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './view/principal/principal.component';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselComponent } from './view/components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoloesComponent } from './view/boloes/boloes.component';
import { CardsComponent } from './view/components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BolaoComponent } from './view/bolao/bolao.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { ToolbarComponent } from './view/components/toolbar/toolbar.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { ResultComponent } from './view/result/result.component';
import { FormSendMessageComponent } from './view/components/form-send-message/form-send-message.component';
import { ResultsComponent } from './view/results/results.component';
import { FloatButtonComponent } from './view/components/float-button/float-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    HomeComponent,
    CarouselComponent,
    BoloesComponent,
    CardsComponent,
    BolaoComponent,
    FooterComponent,
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    ResultComponent,
    ResultsComponent,
    FormSendMessageComponent,
    FloatButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
