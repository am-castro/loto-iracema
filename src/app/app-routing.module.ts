import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoComponent } from './view/bolao/bolao.component';
import { ResultComponent } from './view/result/result.component';
import { SolicitacoesComponent } from './view/admin/solicitacoes/solicitacoes.component';
import { UsuariosFormComponent } from './view/admin/usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './view/admin/usuarios/usuarios.component';
import { BoloesFormComponent } from './view/admin/boloes-form/boloes-form.component';
import { BoloesListComponent } from './view/admin/boloes-list/boloes-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resultados',
    component: ResultComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin/solicitacoes',
        pathMatch: 'full'
      },
      {
        path: 'solicitacoes',
        component: SolicitacoesComponent
      },
      {
        path: 'boloes',
        component: BoloesListComponent
      },
      {
        path: 'boloes/edit/:id',
        component: BoloesFormComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'usuarios/edit/:id',
        component: UsuariosFormComponent
      }
    ]
  },
  {
    path: 'bolao/:id',
    component: BolaoComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
