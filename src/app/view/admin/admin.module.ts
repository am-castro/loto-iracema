import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material-module';
import { BoloesFormComponent } from './boloes/boloes-form/boloes-form.component';
import { BoloesListComponent } from './boloes/boloes-list/boloes-list.component';
import { PrincipalComponent } from './principal/principal.component';
import { SolicitacoesListComponent } from './solicitacoes/solicitacoes-list/solicitacoes-list.component';
import { SolicitacoesFormComponent } from './solicitacoes/solicitacoes-form/solicitacoes-form.component';
import { UsuariosFormComponent } from './users/usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './users/usuarios/usuarios.component';
import { UserTableComponent } from 'src/app/shared/components/user-table/user-table.component';
import { AdminCardComponent } from 'src/app/shared/components/admin-card/admin-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from 'src/app/shared/components/general.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule,
    FlexLayoutModule
  ],
  declarations: [
    BoloesFormComponent,
    BoloesListComponent,
    PrincipalComponent,
    SolicitacoesListComponent,
    SolicitacoesFormComponent,
    UsuariosFormComponent,
    UsuariosComponent,
  ]
})
export class AdminModule { }
