import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubApiRoutingModule } from './github-api-routing.module';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    IssuesListComponent
  ],
  imports: [
    CommonModule,
    GithubApiRoutingModule,
    MaterialModule,
  ]
})
export class GithubApiModule { }
