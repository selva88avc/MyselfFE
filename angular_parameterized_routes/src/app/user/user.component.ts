import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { user } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // inject required user service and activated route
  user: user = {
    id: 0,
    name: ''
  };
  userService = inject(UserService);
  actR = inject(ActivatedRoute);
  constructor() { }

  //subscribe to the route params to get the id and then call the getUserById method of the UserService to get the user details
  ngOnInit() {
    this.actR.params.subscribe(param => this.user.id = Number(param['id']));
    this.userService.getUserById(this.user.id).subscribe(data => this.user = data);
  }
}
