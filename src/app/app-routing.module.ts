import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminColorComponent } from './admin/admin-color/admin-color.component';
import { AdminSizeComponent } from './admin/admin-size/admin-size.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { AdminEmailComponent } from './admin/admin-email/admin-email.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminBrendsComponent } from './admin/admin-brends/admin-brends.component';
import { AdminGuard } from './auth/admin.guard';
import { MobileLoginComponent } from './pages/mobile-login/mobile-login.component';
import { AdminTextComponent } from './admin/admin-text/admin-text.component';
import { AdminFirstHomeSliderComponent } from './admin/admin-first-home-slider/admin-first-home-slider.component';





const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'products', component:ProductsComponent},
  { path:'products/:id', component:ProductDetailsComponent},
  { path:'about', component:AboutComponent},
  { path:'contact', component:ContactComponent},
  { path:'login', component:MobileLoginComponent},
  { path:'admin', component:AdminComponent, canActivate:[AdminGuard], children:[
    { path:'', redirectTo:'category', pathMatch:'full'},
      { path:'products', component:AdminProductsComponent },
      { path:'category', component:AdminCategoryComponent },
      { path:'color', component:AdminColorComponent },
      { path:'size', component:AdminSizeComponent },
      { path:'message', component:AdminMessageComponent },
      { path:'email', component:AdminEmailComponent },
      { path:'about', component:AdminAboutComponent},
      { path:'brend', component:AdminBrendsComponent},
      { path:'text', component:AdminTextComponent},
      { path:'firstHomeSlider', component:AdminFirstHomeSliderComponent},
    ]},
    { path:'basket', component:BasketComponent },

  { path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AdminGuard]
})
export class AppRoutingModule { }
