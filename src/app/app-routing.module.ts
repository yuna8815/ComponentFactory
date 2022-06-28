import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/point',
    pathMatch: 'full'
  },
  {
    path: 'point',
    loadChildren: () => import('./50.event/point/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./50.event/point/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./50.event/point/survey/survey.module').then( m => m.SurveyPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
