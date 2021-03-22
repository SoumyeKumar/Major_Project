import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent},
  { path: 'signup', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
