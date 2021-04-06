import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dialog-git',
  templateUrl: './dialog-git.component.html',
  styleUrls: ['./dialog-git.component.scss']
})
export class DialogGitComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogGitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (!this.data.error) {
      this.data.repos.sort((a: { stargazers_count: number; }, b: { stargazers_count: number; }) => (
        b.stargazers_count - a.stargazers_count
      ));
    }
  }
}
