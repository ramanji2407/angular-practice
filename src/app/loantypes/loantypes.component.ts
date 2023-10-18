import { Component,OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.scss']
})
export class LoantypesComponent implements OnInit {
  addLoanTypeForms!:FormGroup;
  constructor(private fb:FormBuilder)
  {

  }
  ngOnInit(): void {
//     this.addLoanTypeForms=new FormGroup({
 
// 'loanName':new FormControl(),
// 'loanDescription':new FormControl()



//     });


this.addLoanTypeForms=new FormGroup({
  'loanName':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),//'Educational Loan'
'loanDescription':new FormControl('',[Validators.required,Validators.maxLength(50)]),//'Loan will be alloted for only who is having eligibility'
'intrestrate':new FormControl('',[Validators.required,Validators.maxLength(4)]),
// 'users':new FormArray([
//   new FormControl(),
// ])

'users':new FormArray([
  new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
  })
])
})

const newLoanObj={
  'loanName':'Educational Loan',
'loanDescription':'Loan will be alloted for only who is having eligibility',
'intrestrate':'18%'
}
   this.addLoanTypeForms.controls['users'] as FormArray   
//this.addLoanTypeForms.setValue(newLoanObj);
this.addLoanTypeForms.get('loanName')?.statusChanges.subscribe(data=>{
  console.log(data)
})
  }



  addLoanDetails()
  {
    console.log(this.addLoanTypeForms.value);
    console.log(this.addLoanTypeForms.get('loanName')?.value);
this.addLoanTypeForms.valueChanges.subscribe((data)=>{
  console.log(data);
  
})
  
    
    
  }
  get controls() {
    return (this.addLoanTypeForms.get('users') as FormArray).controls;
  }
  resetForm()
  {
    this.addLoanTypeForms.reset();
  }
  changevalues()
  {
    this.addLoanTypeForms.valueChanges.subscribe((data)=>
      {
        console.log(data);
        
      })
  }
  addSkill()
  {
  // (<FormArray>this.addLoanTypeForms.get('users'))?.push(new FormControl('',Validators.required)) 

  (<FormArray>this.addLoanTypeForms.get('users'))?.push(new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
  }))
  }
  delete(i:number)
  {
    (<FormArray>this.addLoanTypeForms.get('users'))?.removeAt(i)
  }
}
