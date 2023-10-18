import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  fullName='ramanjaneyulu'
  user={}
  users={}
constructor(private usersService:UsersService)
{
  
}
ngOnInit():void
{
this.users=this.usersService.getusers()
}
  updatedUserList(data:Event)
  {
    console.log(data);
    this.user=data
    
  }
}
