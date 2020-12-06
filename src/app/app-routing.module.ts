import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
  { path: 'informacion', component: InformacionComponent },
  { path: 'general', component: GeneralComponent },
  { path: '', redirectTo: '/general', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
