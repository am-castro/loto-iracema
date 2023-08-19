import { CommonModule, registerLocaleData } from '@angular/common';
import { MaterialModule } from './material-module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './view/admin/principal/principal.component';
import { LoginComponent } from './view/admin/login/login.component';
import { HomeComponent } from './view/client/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoloesComponent } from './view/boloes/boloes.component';
import { CardsComponent } from './components/shared/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ToolbarComponent } from './view/client/toolbar/toolbar.component';
import { AboutComponent } from './view/client/about/about.component';
import { ContactComponent } from './view/client/contact/contact.component';
import { ResultComponent } from './view/client/result/result.component';
import { FormSendMessageComponent } from './components/form-send-message/form-send-message.component';
import { ResultsComponent } from './view/client/results/results.component';
import { FloatButtonComponent } from './view/client/components/float-button/float-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SolicitacoesListComponent } from './view/admin/solicitacoes/solicitacoes-list/solicitacoes-list.component';
import { SolicitacoesFormComponent } from './view/admin/solicitacoes/solicitacoes-form/solicitacoes-form.component';
import { UsuariosComponent } from './view/admin/users/usuarios/usuarios.component';
import { BoloesListComponent } from './view/admin/boloes/boloes-list/boloes-list.component';
import { UsuariosFormComponent } from './view/admin/users/usuarios-form/usuarios-form.component';
import { BoloesFormComponent } from './view/admin/boloes/boloes-form/boloes-form.component';
import { TableComponent } from './components/table/table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AdminCardComponent } from './components/admin-card/admin-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDeletionComponent } from './components/shared/confirm-deletion/confirm-deletion.component';

import ptBr from '@angular/common/locales/pt';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GeneralModule } from './components/general.module';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BoloesComponent,
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    ResultComponent,
    ResultsComponent,
    FloatButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    FontAwesomeModule,
    GeneralModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'} },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
