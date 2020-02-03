import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from './loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, AfterViewInit {

  show = false;
  noInternetToast;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }
  
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        if (state.error){
          this.noInternetToast.MaterialSnackbar.showSnackbar({message: '¯\_(ツ)_/¯ No internet connection!' });
        }
      });
  }

  ngAfterViewInit(){
    this.noInternetToast = document.querySelector('#no-internet-toast');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
