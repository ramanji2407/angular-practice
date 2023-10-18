import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  colour=''
  id=0
  name=''
  constructor(private route:ActivatedRoute)
  {
    this.route.queryParams.subscribe((params)=>
    {
      console.log(params);
      const value=params

      this.colour=value['colour']
      this.id=value['id']
      this.name=value['name']
      
    })
  }

}
