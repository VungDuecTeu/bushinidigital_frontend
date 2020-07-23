import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepostComponent } from './createpost/createpost.component';
import { CreatePostRoutingModule } from './createpost-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [CreatepostComponent],
  imports: [
    CommonModule,
    CreatePostRoutingModule,
    MaterialModule,
    HomeModule
  ]
})
export class CreatepostModule { }
