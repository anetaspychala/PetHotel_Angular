import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginContainerComponent} from "./containers/login-container/login-container.component";
import {RegisterContainerComponent} from "./containers/register-container/register-container.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginContainerComponent, children: [
      { path: '', component: LoginComponent},
    ]},
  { path: 'register', component: RegisterContainerComponent, children: [
      { path: '', component: RegisterComponent},
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
