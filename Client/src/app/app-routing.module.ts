import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatingHubDetailComponent } from './dating-hub/member-detail/dating-hub-detail.component';
import { DatingHubListComponent } from './dating-hub/member-list/dating-hub-list.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { MessagesComponent } from './messages/messages.component';
import {AuthGuard} from './_guards/auth.guard';
import {TestErrorsComponent} from './errors/test-errors/test-errors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MemberEditComponent} from './dating-hub/member-edit/member-edit.component';
import {PreventUnsavedChangesGuard} from "./_guards/prevent-unsaved-changes.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children:
  [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'listings', component: ListingsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'dating-hub/members', component: DatingHubListComponent},
    {path: 'dating-hub/members/:username', component: DatingHubDetailComponent},
    {path: 'member/edit', component: MemberEditComponent, canDeactivate:[PreventUnsavedChangesGuard]},
  ]},
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'not-found', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
