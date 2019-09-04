import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private text: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private subscription: Subscription;

  constructor() {}

  public setLoading(status: boolean): void {
    this.loadingStatus.next(status);
  }

  public setLoadingText(text: string): void {
    this.text.next(text);
  }

  public subscribe(callbackFunc: (value: boolean) => void) {
    this.subscription = this.loadingStatus.subscribe(callbackFunc);
  }

  public unsubsribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
