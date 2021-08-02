import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  
  // TODO
  isShow = false


  constructor(private ngxService: NgxUiLoaderService, private router: Router) { }

  ngOnInit() {

//loder
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();


    }, 2000)

    this.ngxService.startBackground('db-background-things');

    this.ngxService.stopBackground('db-background-things');

    this.ngxService.startLoader('loader-01');
    setTimeout(() => {
      this.ngxService.stopLoader('loader-01');

    }, 2000)


  }

  // isShow: boolean;
  // topPosToStartShowing = 100;

  // @HostListener('window:scroll')
  // checkScroll() {
      
  //   // window의 scroll top
  //   // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   // console.log('[scroll]', scrollPosition);
    
  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isShow = true;
  //   } else {
  //     this.isShow = false;
  //   }
  // }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  
}
