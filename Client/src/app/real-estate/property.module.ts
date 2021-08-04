import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PropertyComponent} from './property.component';
import {SharedModule} from '../shared/shared.module';
import { PropertyListingsComponent } from './property-listings/property-listings.component';
import {RealEstateDashboardComponent} from './real-estate-dashboard/real-estate-dashboard.component';
import {FormsModule} from '@angular/forms';
import { CreateListingComponent } from './real-estate-manager/create-listing/create-listing.component';
import {RealEstateManagementComponent} from './real-estate-manager/real-estate-management';
import {RouterModule} from "@angular/router";
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [
    PropertyComponent,
    PropertyListingsComponent,
    RealEstateDashboardComponent,
    RealEstateManagementComponent,
    CreateListingComponent,
    PropertyDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PropertyComponent,
    PropertyListingsComponent,
    RealEstateDashboardComponent,
    RealEstateManagementComponent,
    CreateListingComponent,
    PropertyDetailsComponent
  ]
})
export class PropertyModule { }
