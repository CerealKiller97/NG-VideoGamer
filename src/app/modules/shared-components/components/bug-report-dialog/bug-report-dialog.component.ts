import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '..';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export interface BugReport {
  fullName: string;
  bug: string;
}

@Component({
  selector: 'app-bug-report-dialog',
  templateUrl: './bug-report-dialog.component.html',
  styleUrls: ['./bug-report-dialog.component.css']
})
export class BugReportDialogComponent implements OnInit {
  public readonly bugReportForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    bug: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private readonly dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BugReport,
    private readonly snackBar: MatSnackBar
  ) {}

  public ngOnInit() {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private openSuccessSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['success']
    };

    this.snackBar.open('You have successfully contacted VideoGamer.', null, options);
  }

  private openErrorSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['danger']
    };

    this.snackBar.open('Fill the form properly.', null, options);
  }

  public submitReport(): void {
    if (this.bugReportForm.invalid) {
      console.log(this.bugReportForm.errors);
      // Show snack bar error
      this.openErrorSnackBar();
    } else {
      const data: any = this.bugReportForm.getRawValue();

      this.dialogRef.close();

      // // Clear contact form
      this.bugReportForm.reset();
      this.bugReportForm.markAsPristine();
      this.bugReportForm.markAsUntouched();

      // Show success snack bar
      this.openSuccessSnackBar();
    }
  }
}
