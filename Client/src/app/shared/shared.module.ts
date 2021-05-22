import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {ToastrModule} from "ngx-toastr";
@NgModule({
  declarations: [
    NavComponent,
    LoginFormComponent,
    NavigationComponent
  ],
  exports: [
    NavComponent,
    LoginFormComponent,
    BsDropdownModule,
    ToastrModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

    ]
})
export class SharedModule { }
