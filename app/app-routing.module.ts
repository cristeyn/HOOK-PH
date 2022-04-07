import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_helpers/auth.guard';
import { BookNowComponent } from './book-now/book-now.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './maintenance/role/role.component';
import { UserComponent } from './maintenance/user/user.component';
import { NotificationComponent } from './notification/notification.component';
import { PackageViewComponent } from './package-view/package-view.component';
import { PackageComponent } from './package/package.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuard]
  },
  {
    path: 'notification', component: NotificationComponent, canActivate: [AuthGuard]
  }, {
    path: 'my-transactions/view', component: BookNowComponent, canActivate: [AuthGuard]
  },{
    path: 'my-transactions', component: TransactionsComponent, canActivate: [AuthGuard]
  },{
    path: 'payment-failed', component: PaymentFailedComponent, canActivate: [AuthGuard]
  },{
    path: 'payment-success', component: PaymentSuccessComponent, canActivate: [AuthGuard]
  },{
    path: 'package/view/:PackageID/book-now', component: BookNowComponent, canActivate: [AuthGuard]
  },{
    path: 'package/view/:PackageID', component: PackageViewComponent, canActivate: [AuthGuard]
  },{
    path: 'package/:ServiceID', component: PackageComponent, canActivate: [AuthGuard]
  },{
    path: 'maintenance/role', component: RoleComponent, canActivate: [AuthGuard]
  },
  {
    path: 'maintenance/user', component: UserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },{
    path: 'forgot-password', component: ForgotPasswordComponent
  },{
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: '', component: DashboardComponent,canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
