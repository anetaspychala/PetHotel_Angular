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
  UserContainerComponentComponent
} from "./containers/user-container-component/user-container-component.component";
import {AnimalListComponent} from "./adminPanel/animal-list/animal-list.component";
import {AdminContainerComponent} from "./containers/admin-container/admin-container.component";
import {AddAnimalComponent} from "./add-animal/add-animal.component";
import {AddReservationComponent} from "./add-reservation/add-reservation.component";
import {ReservationListComponent} from "./reservation-list/reservation-list.component";

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
  { path: 'admin', component: AdminContainerComponent, children: [
      { path: '', component: AdminComponent},
      { path: 'animallist', component: AnimalListComponent },
      { path: 'reservationslist', component: ReservationListComponent }
    ]},
  { path: 'user', component: UserContainerComponentComponent, children: [
      { path: '', component: UserComponent},
      { path: 'addanimal', component: AddAnimalComponent },
      { path: 'addreservation', component: AddReservationComponent },
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
