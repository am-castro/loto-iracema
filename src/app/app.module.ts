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
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoloesComponent } from './view/boloes/boloes.component';
import { CardsComponent } from './components/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BolaoComponent } from './view/bolao/bolao.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { ResultComponent } from './view/result/result.component';
import { FormSendMessageComponent } from './components/form-send-message/form-send-message.component';
import { ResultsComponent } from './view/results/results.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SolicitacoesComponent } from './view/admin/solicitacoes/solicitacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    HomeComponent,
    CarouselComponent,
    BoloesComponent,
    CardsComponent,
    SpinnerComponent,
    BolaoComponent,
    FooterComponent,
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    ResultComponent,
    ResultsComponent,
    FormSendMessageComponent,
    FloatButtonComponent,
    SolicitacoesComponent
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
