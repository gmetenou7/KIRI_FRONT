import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShNotFountComponent } from './shared/sh-notfount/sh-notfount.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'board',
    loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
  },
  {
    path: '**',
    component: ShNotFountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
