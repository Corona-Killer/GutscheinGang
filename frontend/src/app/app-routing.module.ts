import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupComponent } from './pages/startup/startup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: StartupComponent
  }
  ,
  {
    path: 'about',
    pathMatch: 'full',
    component: StartupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
