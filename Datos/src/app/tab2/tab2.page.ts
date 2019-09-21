import { Component, OnInit } from '@angular/core';
import { InfoPersonalService } from '../Service/info-personal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
users: any = [];
  constructor(private infoPersonalService: InfoPersonalService) {}

  ngOnInit()  {
    this.infoPersonalService.getUsers().subscribe((users) => {
      this.users = users; 
      console.log(users);
    });
  }
}
