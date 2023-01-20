import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubApiRoutingModule { }
