import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { BillComponent } from './bill/bill.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositComponent } from './deposit/deposit.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'account', component: AccountComponent },
  { path: 'bill', component: BillComponent },
  { path: 'withdrawal', component: WithdrawalComponent },
  { path: 'deposit', component: DepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
