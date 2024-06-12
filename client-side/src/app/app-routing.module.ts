import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './Guard/auth-guard.guard';

const routes: Routes = [
  // {
  //   path:'chat',
  //   loadComponent:() => import ('./pages/chat/chat.component').then((m)=>m.ChatComponent),
  // },
  // {
  //   path:'login',
  //   loadComponent:()=> import('./pages/login/login.component').then((m)=>m.LoginComponent),
  // },
  // {
  //   path:'',
  //   loadComponent:()=> import('./pages/login/login.component').then((m)=>m.LoginComponent),
  // }
  {
    path:'chat',canActivate:[authGuard],
    component:ChatComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    pathMatch:'full',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
