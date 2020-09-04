import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './dashboard/display/display.component';
import { CreateComponent } from './books/create/create.component';

const routes: Routes = [
  {path: '' , component: DisplayComponent},
  {path: 'create' , component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
