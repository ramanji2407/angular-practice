import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent {
  @Input()
  fullName!:string
  @Input()
  tax!:number

  @Output()
  updatedlist=new EventEmitter();


  add()
  {
    console.log("click on add list");
    const userobj={
      userid:'1',
      userName:'ramanjaneyulu'
    }
    this.updatedlist.emit(userobj)
  }

}
