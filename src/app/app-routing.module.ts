import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { AddloanComponent } from './addloan/addloan.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { adminGaurdGuard } from './admin-gaurd.guard';
import { superadminGuard } from './superadmin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { adminacessGuard } from './adminacess.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: 'product/:id',
  //   component: ProductComponent,
  // },
  // { path: 'product/:productid/photo/:photoid', component: ProductComponent },
  // {
  //   path: 'clients',
  //   component: ClientsComponent,
  //   canActivate: [authGuard, adminGaurdGuard],
  // },
  // {
  //   path: 'loan-types',
  //   component: LoantypesComponent,
  // },
 

  // {
  //   path: 'add-new-loan',
  //   redirectTo: 'loan-type',
  // },
  // {
  //   path: 'admin',
  //   canActivate: [superadminGuard],
  //   children: [
  //     {
  //       path: '',
  //       component: AdminComponent,
  //     },
  //     {
  //       path: '',
  //       canActivateChild: [adminacessGuard],
  //       children: [
  //         {
  //           path: 'edit',
  //           component: AdminEditComponent,
  //           canActivate: [superadminGuard],
  //         },
  //         {
  //           path: 'delete',
  //           component: AdminDeleteComponent,
  //         },
  //         {
  //           path: 'manage',
  //           component: AdminManageComponent,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'loan-type',
  //   component: LoantypesComponent,
  // },
  // {
  //   path: 'add-loan',
  //   children: [
  //     {
  //       path: 'loan-type',
  //       component: LoantypesComponent,
  //     },
  //     {
  //       path: 'loans',
  //       component: LoansComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'search',
  //   component: SearchComponent,
  // },
  // {
  //   path: 'payments',
  //   loadChildren: () =>
  //     import('./payments/payments.module').then((m) => m.PaymentsModule),
  // },
  // {
  //   path: 'preferences',
  //   loadChildren: () =>
  //     import('./preferences/preferences.module').then(
  //       (m) => m.PreferencesModule
  //     ),
  // },
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  
  {
    path:'',
    component:LoansComponent
  },
  {
    path:'loan-types',
    component:LoantypesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
