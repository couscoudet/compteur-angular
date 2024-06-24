import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormValidationComponent } from './exo/reactive-form-validation/reactive-form-validation.component';
import { PecheComponent } from './router/peche/peche.component';
import { NotfoundComponent } from './router/notfound/notfound.component';

const routes: Routes = [
  { path: 'ananas', component: ReactiveFormValidationComponent },
  { path: 'peche', component: PecheComponent },
  { path: '404', component: NotfoundComponent },
  { path: '', redirectTo: 'ananas', pathMatch: 'prefix' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
