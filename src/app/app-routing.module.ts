import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcFormComponent } from './ic-form/ic-form.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VersionsComponent } from './versions/versions.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: IcFormComponent},
  { path: 'tutorial', component: TutorialComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'versions', component: VersionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  IcFormComponent,
  TutorialComponent,
  NavbarComponent,
  VersionsComponent,
]
