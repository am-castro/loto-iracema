import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SolicitacoesListComponent } from "./solicitacoes/solicitacoes-list/solicitacoes-list.component";
import { BoloesListComponent } from "./boloes/boloes-list/boloes-list.component";
import { BoloesFormComponent } from "./boloes/boloes-form/boloes-form.component";
import { UsuariosComponent } from "./users/usuarios/usuarios.component";
import { UsuariosFormComponent } from "./users/usuarios-form/usuarios-form.component";

const routes: Routes = [
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
];


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
