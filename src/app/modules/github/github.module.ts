import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitListComponent } from './pages/git-list/git-list.component';
import { DialogGitComponent } from './../../shared/dialog-git/dialog-git.component';

import { GithubRoutingModule } from './github-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [GitListComponent, DialogGitComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatTabsModule
  ]
})
export class GithubModule {

}
