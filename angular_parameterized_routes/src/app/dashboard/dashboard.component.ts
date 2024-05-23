import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: user[] = [];
  userserv = inject(UserService);
  constructor() {

  }
  ngOnInit(): void {
    this.userserv.getUsers().subscribe(users => this.users = users);
  }
}
