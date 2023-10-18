import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent {

  firstName:string='';
  terms:boolean=false;
  customertype:string=''
  seniocitizen :string=''
  adult :string=''
  description=''
  type=''
  addcustomer(formdetails :NgForm)
  {
    console.log(formdetails.value);
    
  }
  resetForm(formdetail :NgForm)
  {
    // formdetail.reset()
    formdetail.resetForm()
  }
  setformValues(formvalues:NgForm)
  {
    let user={
      firstName:'ramanji',
      terms:false,
      customertype:'1',
      description:'nyc customer support',
      type:''
     

    }
    formvalues.setValue(user)

  }


}
