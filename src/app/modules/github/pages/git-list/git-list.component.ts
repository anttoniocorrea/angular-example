import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogGitComponent } from 'src/app/shared/dialog-git/dialog-git.component';
import { GithubService } from './../../../../services/github.service'

@Component({
  selector: 'app-git-list',
  templateUrl: './git-list.component.html',
  styleUrls: ['./git-list.component.scss']
})
export class GitListComponent implements OnInit {
  myForm: FormGroup;
  searchControl = new FormControl();

  constructor(private githubService: GithubService, fb: FormBuilder, public dialog: MatDialog) {
    this.myForm = fb.group({
      search: this.searchControl
    });
  }

  ngOnInit(): void {
  }

  async submit() {
    let data = {
      user: {},
      repos: {},
      error: false
    };
    try {
      data.user = await this.fetchUser();
      data.repos = await this.fetchRepos();
      this.openDialog(data);
    } catch (error) {
      data.error = true;
      this.openDialog(data);
    }

  }
  async fetchUser() {
    return await this.githubService.sendGetUserRequest(this.myForm.value.search).toPromise();
  }

  async fetchRepos() {
    return await this.githubService.sendGetRepoRequest(this.myForm.value.search).toPromise();
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogGitComponent, {
      width: '50%',
      data: data,
      panelClass: 'custom-dialog-git'
    });
  }

}
