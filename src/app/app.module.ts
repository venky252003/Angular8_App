import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header.component';
import { FooterComponent } from './app.footer.component';
import { MenuComponent } from './app.menu.component';

import { CustomerModule } from './customers/customer.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error.component';
import { SharedModule } from './shared';
import { ServicesModule } from './services';
import { OrdersModule } from './orders/order.module';
import { UnAuthorizeComponent } from './unauthorize/unauthorize.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './services/logger.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    UnAuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomerModule,
    OrdersModule,
    SharedModule,
    ServicesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggerInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
