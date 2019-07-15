import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'intro',
        children: [
          {
            path: '',
            loadChildren: '../intro/intro.module#IntroPageModule'
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: '../feed/feed.module#FeedPageModule'
          }
        ]
      },
      {
        path: 'cep',
        children: [
          {
            path: '',
            loadChildren: '../consulta-cep/consulta-cep.module#ConsultaCepPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/intro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
