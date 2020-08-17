import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeeListComponent } from './crud/home/home.component';
import { ShowComponent } from './crud/show/show.component';
import { AddEmployeeComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';

const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud/home', component: EmployeeeListComponent },
  { path: 'crud/show/:id', component: ShowComponent },
  { path: 'crud/create', component: AddEmployeeComponent },
  { path: 'crud/update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
