import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  user=""
colvalue=2
  heading_name="Angular"
  page_count=10
  user_object={"firstName":"ram","lastName":"anji"}
  sucess_msg=true
  imageurl='whdw.de'
  altdata="alternatedata"
  sayHello()
  {
    console.log();
    
    
  }
  sumOfNumber(a:number,b:number,c:number)
{
  console.log(a+b+c);
  
}

fullname="RAMANJANEYULU PASUPULETI"
  tax=225
  dynamiccolor='red'
  txtcolor='red'
  styleclass='c2'
  styled='c3'
  superpower='superma';
  username="";
  age=0
  dateexample=new Date();
  sucess=true
  contacts=[{
    'firstName':'ram',
    'lastName':'anji',
    'contactId':'12'

  },
  {
    'firstName':'prem',
    'lastName':'chand',
    'contactId':'22'

  },
  {
    'firstName':'vinay',
    'lastName':'bineti',
    'contactId':'32'

  },
  {
    'firstName':'prem',
    'lastName':'chand',
    'contactId':'22'

  },
  {
    'firstName':'vinay',
    'lastName':'bineti',
    'contactId':'32'

  }


]
getClassname()
{
  return 'c1';
}
total_cost=10;
totalpercentage=0.900


getUserName(event:any){
 
  this.username=event.target.value
  
}
}
