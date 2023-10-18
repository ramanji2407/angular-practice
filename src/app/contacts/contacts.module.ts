import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';



@NgModule({
  declarations: [
    AddContactsComponent,
    EditComponentComponent,
    DeleteComponentComponent,
    ListComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
