import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitListComponent } from './pages/git-list/git-list.component';

const routes: Routes = [
  {path: '', component: GitListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
