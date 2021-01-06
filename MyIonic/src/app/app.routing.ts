import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { DemoModule } from './demo/demo.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { TableModule } from './table/table.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    // loadChildren: './home/home.module#HomeModule'
    loadChildren: () => HomeModule
  },
  {
    path: 'home',
    // component: HomeComponent,
    // loadChildren: './home/home.module#HomeModule'
     loadChildren: () => HomeModule
    // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    loadChildren: () => LoginModule
    // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'logout',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    loadChildren: () => LoginModule
    // loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'demo',
    // component: DemoComponent,
    // loadChildren: './demo/demo.module#DemoModule'
    loadChildren: () => DemoModule
    // loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)

  },
  {
    path: 'user',
    // component: UserComponent,
    // loadChildren: './user/user.module#UserModule'
    loadChildren: () => UserModule
  },
  {
    path: 'table',
    // component: TableComponent,
    // loadChildren: './table/table.module#TableModule'
    loadChildren: () => TableModule
    // loadChildren: () => import('./table/table.module').then(m => m.TableModule)

  },
  {
    path: 'chat',
    // component: DemoComponent,
    // loadChildren: './chat/chat.module#ChatModule'
    loadChildren: () => ChatModule
    // loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)

  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
