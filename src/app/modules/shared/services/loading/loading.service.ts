import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private subscription: Subscription;

  constructor() {}

  public setLoading(status: boolean): void {
    this.loadingStatus.next(status);
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
