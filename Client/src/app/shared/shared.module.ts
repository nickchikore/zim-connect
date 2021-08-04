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
import { FileUploadModule } from 'ng2-file-upload';
import { WarningComponent } from './user-feedback/warning/warning.component';
import { SuccessComponent } from './user-feedback/success/success.component';
import { ErrorComponent } from './user-feedback/error/error.component';
import { LoadingComponent } from './user-feedback/loading/loading.component';
import { TypeAheadComponent } from './form-elements/type-ahead/type-ahead.component';
@NgModule({
  declarations: [
    NavComponent,
    LoginFormComponent,
    NavigationComponent,
    CardComponent,
    WarningComponent,
    SuccessComponent,
    ErrorComponent,
    LoadingComponent,
    TypeAheadComponent
  ],
  exports: [
    NavComponent,
    LoginFormComponent,
    BsDropdownModule,
    ToastrModule,
    CardComponent,
    TabsModule,
    NgxGalleryModule,
    ModalModule,
    FileUploadModule,
    WarningComponent,
    SuccessComponent,
    ErrorComponent,
    LoadingComponent,
    TypeAheadComponent
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
    FileUploadModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })

    ]
})
export class SharedModule { }
