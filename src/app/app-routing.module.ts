import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form.component';

const routes: Routes = [
  {path: 'simpleform', component: SimpleFormComponent},
  { path: '', redirectTo: '/simpleform', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
