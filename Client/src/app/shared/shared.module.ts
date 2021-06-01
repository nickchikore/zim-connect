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
import {ToastrModule} from 'ngx-toastr';
import { CardComponent } from './card/card.component';
import {ModalModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
@NgModule({
  declarations: [
    NavComponent,
    LoginFormComponent,
    NavigationComponent,
    CardComponent
  ],
  exports: [
    NavComponent,
    LoginFormComponent,
    BsDropdownModule,
    ToastrModule,
    CardComponent,
    TabsModule,
    NgxGalleryModule,
    ModalModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

    ]
})
export class SharedModule { }
