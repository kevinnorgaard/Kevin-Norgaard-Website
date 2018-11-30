import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import {ShopComponent} from './pages/shop/shop.component';
import {AboutComponent} from './pages/about/about.component';
import {HelpComponent} from './pages/help/help.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
