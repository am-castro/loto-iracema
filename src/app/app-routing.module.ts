import { HomeComponent } from './view/client/home/home.component';
import { LoginComponent } from './view/admin/login/login.component';
import { PrincipalComponent } from './view/admin/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './view/client/result/result.component';
import { UsuariosFormComponent } from './view/admin/users/usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './view/admin/users/usuarios/usuarios.component';
import { BoloesFormComponent } from './view/admin/boloes/boloes-form/boloes-form.component';
import { BoloesListComponent } from './view/admin/boloes/boloes-list/boloes-list.component';
import { SolicitacoesListComponent } from './view/admin/solicitacoes/solicitacoes-list/solicitacoes-list.component';

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
        component: SolicitacoesListComponent
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
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
