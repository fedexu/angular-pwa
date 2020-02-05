import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from './loader.service';
import { flipOutYOnLeaveAnimation, flipInXOnEnterAnimation } from 'animation-lib';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    flipOutYOnLeaveAnimation(),
    flipInXOnEnterAnimation()
  ]
})
export class LoaderComponent implements OnInit, AfterViewInit {

  show = false;
  noInternetToast;

  private subscription: Subscription;

  constructor(private readonly loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        if (state.error) {
          this.noInternetToast.MaterialSnackbar.showSnackbar({ message: state.message});
        }
      });
  }

  ngAfterViewInit() {
    this.noInternetToast = document.querySelector('#no-internet-toast');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
