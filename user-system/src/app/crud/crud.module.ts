import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [HomeComponent, ShowComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule
  ]
})
export class CrudModule { }
