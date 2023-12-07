import { HomeComponent } from './view/client/home/home.component';
import { LoginComponent } from './view/admin/login/login.component';
import { PrincipalComponent } from './view/admin/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './view/client/result/result.component';
// import { ResultResolver } from './view/client/shared/providers/resolvers/result.resolver';

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
    component: ResultComponent,
    resolve: {
      // loterias: ResultResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: PrincipalComponent,
    loadChildren: () => import('./view/admin/admin.module').then(m => m.AdminModule)
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
