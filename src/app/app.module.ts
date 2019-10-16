import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { SharedComponent } from './shared/shared.component';
import { BigHeaderComponent } from './components/big-header/big-header.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminColorComponent } from './admin/admin-color/admin-color.component';
import { AdminSizeComponent } from './admin/admin-size/admin-size.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AdminEmailComponent } from './admin/admin-email/admin-email.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminBrendsComponent } from './admin/admin-brends/admin-brends.component';
import { MobileLoginComponent } from './pages/mobile-login/mobile-login.component';
import { AdminTextComponent } from './admin/admin-text/admin-text.component';
import { AdminFirstHomeSliderComponent } from './admin/admin-first-home-slider/admin-first-home-slider.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { CartComponent } from './cart/cart.component';

import { AdminGuard } from './auth/admin.guard';


// import { UICarouselModule } from "ui-carousel";
// import {PageSliderModule}    from 'ng2-page-slider';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { CarouselModule } from 'ngx-carousels';
import {NgxUiLoaderModule} from 'ngx-ui-loader';


import { NguCarouselModule } from '@ngu/carousel';

// Pipes
import { SelectSizePipe } from './shared/pipes/select-size.pipe';
import { SelectCategoryPipe } from './shared/pipes/select-category.pipe';
import { SelectBrendPipe } from './shared/pipes/select-brend.pipe';
import { SelectPricePipe } from './shared/pipes/select-price.pipe';


//FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';








@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PagesComponent,
    AdminComponent,
    SharedComponent,
    BigHeaderComponent,
    NewsLetterComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    AdminProductsComponent,
    AdminCategoryComponent,
    ProductDetailsComponent,
    AdminColorComponent,
    AdminSizeComponent,
    AdminMessageComponent,
    BasketComponent,
    AdminEmailComponent,
    SelectSizePipe,
    AdminAboutComponent,
    AdminBrendsComponent,
    SelectCategoryPipe,
    SelectBrendPipe,
    SelectPricePipe,
    MobileLoginComponent,
    AdminTextComponent,
    AdminFirstHomeSliderComponent,
    EmptyCartComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgxPaginationModule,
    CarouselModule,
    NgxUiLoaderModule,
    // UICarouselModule 
    NguCarouselModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
