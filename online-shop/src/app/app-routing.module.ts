import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SiteComponent } from './components/site/site.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { ContactComponent } from './components/views/contact/contact.component';
import { DetailComponent } from './components/views/detail/detail.component';
import { HomeComponent } from './components/views/home/home.component';
import { ShopComponent } from './components/views/shop/shop.component';
import { LoginGuardGuard } from './services/login-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'categories', component: AdminCategoriesComponent }],
  },
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [LoginGuardGuard],
      },
      { path: 'contact', component: ContactComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
