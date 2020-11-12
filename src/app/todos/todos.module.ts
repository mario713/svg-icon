import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appLocation } from '../svg/app-location.icon';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, SvgIconsModule.forChild(appLocation)]
})
export class TodosModule {}