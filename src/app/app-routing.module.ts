import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizacion.guard';
import { NotActiveGuard } from './guards/not-active-guard.guard';
import { ProfAutorizadoGuard } from './guards/profe-autorizado.guard';
import { AlumnoAutorizadoGuard } from './guards/alumno-autorizado.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate:[NotActiveGuard]
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule),
    canActivate:[NotActiveGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate:[NotActiveGuard]
  },
  {
    path: 'hub',
    loadChildren: () => import('./pages/hub/hub.module').then(m => m.HubPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then(m => m.QrPageModule),
    canActivate: [AlumnoAutorizadoGuard]
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'create-qr/:id',
    loadChildren: () => import('./pages/create-qr/create-qr.module').then( m => m.CreateQRPageModule),
    canActivate:[ProfAutorizadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
