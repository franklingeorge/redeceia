import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select-cad',
    loadChildren: () => import('./select-cad/select-cad.module').then( m => m.SelectCadPageModule)
  },
  {
    path: 'cad-membro',
    loadChildren: () => import('./cad-membro/cad-membro.module').then( m => m.CadMembroPageModule)
  },
  {
    path: 'cad-celula',
    loadChildren: () => import('./cad-celula/cad-celula.module').then( m => m.CadCelulaPageModule)
  },
  {
    path: 'cad-eventos',
    loadChildren: () => import('./cad-eventos/cad-eventos.module').then( m => m.CadEventosPageModule)
  },
  {
    path: 'inscrever',
    loadChildren: () => import('./inscrever/inscrever.module').then( m => m.InscreverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
