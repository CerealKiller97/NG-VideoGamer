import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '../../../shared/services/loading/loading.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public readonly contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
    body: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private readonly titleService: Title,
    private readonly loadingService: LoadingService,
    private readonly snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('VideoGamer | Contact');
  }

  public openSuccessSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['success']
    };

    this.snackBar.open('You have successfully contacted VideoGamer.', null, options);
  }

  public openErrorSnackBar(): void {
    const options: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 4000,
      horizontalPosition: 'end',
      panelClass: ['danger']
    };

    this.snackBar.open('Fill the form properly.', null, options);
  }

  public onSubmitContactForm(): void {
    if (this.contactForm.invalid) {
      console.log(this.contactForm.errors);
      console.log('errors');
      this.openErrorSnackBar();
      // show errors
      // snack bar error
    } else {
      console.log(this.contactForm.getRawValue());

      // // Clear contact form
      this.contactForm.reset();

      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();

      // Show success snack bar
      this.openSuccessSnackBar();
    }
  }

  public onSubmitBugReportForm(): void {}
}
