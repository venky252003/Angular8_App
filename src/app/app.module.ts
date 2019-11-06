import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header.component';
import { FooterComponent } from './app.footer.component';
import { MenuComponent } from './app.menu.component';

import { CustomerModule } from './customers/customer.module';
import { ProductModule } from './product/product.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ErrorComponent } from './error.component';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomerModule,
    ProductModule,
    AboutModule,
    ContactModule,
    SharedModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
