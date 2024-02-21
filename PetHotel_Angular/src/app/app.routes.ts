import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginContainerComponent} from "./containers/login-container/login-container.component";
import {RegisterContainerComponent} from "./containers/register-container/register-container.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {PriceComponent} from "./price/price.component";
import {PriceContainerComponent} from "./containers/price-container/price-container.component";
import {MiddleComponent} from "./middle/middle.component";
import {TreatmentsComponent} from "./treatments/treatments.component";
import {TreatmentsContainerComponent} from "./containers/treatments-container/treatments-container.component";
import {
  AdminContainerComponentComponent
} from "./containers/admin-container-component/admin-container-component.component";
import {
  UserContainerComponentComponent
} from "./containers/user-container-component/user-container-component.component";

export const routes: Routes = [
  { path: 'price', component: PriceContainerComponent, children: [
      { path: '', component: PriceComponent },
    ]},
  { path: 'services', component: TreatmentsContainerComponent, children: [
      { path: '', component: TreatmentsComponent},
    ]},
  { path: 'home', component: MiddleComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginContainerComponent, children: [
      { path: '', component: LoginComponent},
    ]},
  { path: 'register', component: RegisterContainerComponent, children: [
      { path: '', component: RegisterComponent},
    ]},
  { path: 'admin', component: AdminContainerComponentComponent, children: [
      { path: '', component: AdminComponent},
    ]},
  { path: 'user', component: UserContainerComponentComponent, children: [
      { path: '', component: UserComponent},
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
