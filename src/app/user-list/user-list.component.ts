import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  first = 0;
  rows = 10;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // Get Users from UserService
    this.userList = this.userService.getUser();
  }

  // Remove User from User List
  remove(id: number) {
    this.userService.removeUser(id);
    this.userList = this.userService.getUser();
  }
}
