import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient)
   {
    

  }
  getusers()
  {
    const users = [
      {
        userId: 'lsit181',
        userName: 'ramnjaneyulu',
      },
      {
        userId: 'lsit180',
        userName: 'vinay',
      },
    ]
    return users;
  }
}
