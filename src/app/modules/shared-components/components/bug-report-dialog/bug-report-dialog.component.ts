import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '..';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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
    public readonly dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BugReport
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
