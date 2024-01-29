import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'footer', component:FooterComponent},
  { path:'navbar', component:NavbarComponent},
  { path:'', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'career', component:CareerComponent},
  { path:'contact', component:ContactComponent},
  { path:'product', component:ProductsComponent},
  { path:'privacy', component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
