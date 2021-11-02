import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tools',
        loadChildren: () => import('../pages/tools/tools-routing.module').then(m => m.ToolsPageRoutingModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account-routing.module').then(m => m.AccountPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
