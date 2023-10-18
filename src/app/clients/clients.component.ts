import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clientlist=[
    {clientid:1,firstname:'ram',lastname:'anji'},
    {clientid:2,firstname:'prem',lastname:'gunti'},
    {clientid:3,firstname:'vinay',lastname:'bineti'},
    {clientid:4,firstname:'nags',lastname:'snake'}
  ]

}
