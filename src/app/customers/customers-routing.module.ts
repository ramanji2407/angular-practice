import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
{path:'add',component:AddCustomersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
