import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from '../../../shared/services/loading/loading.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private readonly titleService: Title, private readonly loadingService: LoadingService) {}

  ngOnInit() {
    this.titleService.setTitle('VideoGamer | Contact');
  }
}
