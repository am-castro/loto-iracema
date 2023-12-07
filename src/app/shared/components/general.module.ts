import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCardComponent } from './admin-card/admin-card.component';
import { FormSendMessageComponent } from './form-send-message/form-send-message.component';
import { CardsComponent } from './shared/card/card.component';
import { ConfirmDeletionComponent } from './shared/confirm-deletion/confirm-deletion.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BoloesComponent } from './boloes/boloes.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminCardComponent,
    FormSendMessageComponent,
    CardsComponent,
    ConfirmDeletionComponent,
    FooterComponent,
    SpinnerComponent,
    TableComponent,
    UserTableComponent,
    BoloesComponent
  ],
  exports: [
    AdminCardComponent,
    FormSendMessageComponent,
    CardsComponent,
    ConfirmDeletionComponent,
    FooterComponent,
    SpinnerComponent,
    TableComponent,
    UserTableComponent,
    BoloesComponent
  ]
})
export class GeneralModule { }
