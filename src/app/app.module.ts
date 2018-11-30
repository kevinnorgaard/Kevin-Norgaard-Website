import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { ElectionsComponent } from './pages/tools/elections/elections.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './pages/shop/shop.component';
import { ListingListComponent } from './pages/shop/listing-list/listing-list.component';
import { ListingComponent } from './pages/shop/listing/listing.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { QuickAddDialogComponent } from './dialogs/quick-add-dialog/quick-add-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ToolsComponent,
    ElectionsComponent,
    ShopComponent,
    ListingListComponent,
    ListingComponent,
    AboutComponent,
    HelpComponent,
    QuickAddDialogComponent,
    ShoppingCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QuickAddDialogComponent]
})
export class AppModule { }
