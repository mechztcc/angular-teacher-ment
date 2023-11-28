import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalRenderModule } from './shared/components/modal-render/modal-render.module';
import { NotificationsDeliveryModule } from './shared/components/notifications-delivery/notifications-delivery.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HttpHandlerInterceptor } from './shared/interceptors/http.interceptor';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { BackNavegationModule } from './shared/components/back-navegation/back-navegation.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SidebarModule,
    NotificationsDeliveryModule,
    HttpClientModule,
    ModalRenderModule,
    NavbarModule,
    BackNavegationModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
