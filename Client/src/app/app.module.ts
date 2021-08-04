import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListingsComponent } from './listings/listings.component';
import { MessagesComponent } from './messages/messages.component';
import { DatingHubListComponent } from './dating-hub/member-list/dating-hub-list.component';
import { DatingHubDetailComponent } from './dating-hub/member-detail/dating-hub-detail.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DatingMemberCardComponent } from './dating-hub/member-card/dating-member-card.component';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';
import { MemberEditComponent } from './dating-hub/member-edit/member-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PhotoEditorComponent } from './dating-hub/photo-editor/photo-editor.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import {PropertyModule} from './real-estate/property.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './_services/in-memory-data-service';
import {RealEstateService} from "./_services/real-estate.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ListingsComponent,
    MessagesComponent,
    DatingHubListComponent,
    DatingHubDetailComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    DatingMemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PropertyModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    RealEstateService
  ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
