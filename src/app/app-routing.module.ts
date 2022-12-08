import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoComponent } from './view/bolao/bolao.component';
import { ResultComponent } from './view/result/result.component';
import { SolicitacoesComponent } from './view/admin/solicitacoes/solicitacoes.component';

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
        redirectTo: '/solicitacoes',
        pathMatch: 'full'
      },
      {
        path: 'solicitacoes',
        component: SolicitacoesComponent
      },
      {
        path: 'boloes',
        component: SolicitacoesComponent
      },
      {
        path: 'usuarios',
        component: SolicitacoesComponent
      },
      {
        path: '**',
        redirectTo: '/solicitacoes',
      }
    ]
  },
  {
    path: 'admin/boloes',
    component: PrincipalComponent
  },
  {
    path: 'admin/usuarios',
    component: PrincipalComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
