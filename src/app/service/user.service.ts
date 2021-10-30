import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList: User[] = [
    {
      id: 1,
      name: 'Shixismayil',
      dob: new Date('21/02/1998'),
      email: 'hdfg@gmail.com',
      gender: 'Male',
      mobile: '0555555555',
      isActive: true,
      range: [0, 10],
      userType: 'Admin',
    },
  ];

  constructor() {}

  getUser() {
    return this.userList;
  }
  getUsersByID(id: number) {
    return this.userList.find((x) => x.id == id);
  }
  addUser(user: User) {
    user.id = new Date().getTime();
    this.userList.push(user);
  }
  updateUser(user: User) {
    const userIndex = this.userList.findIndex((x) => x.id == user.id);
    if (userIndex != null && userIndex != undefined) {
      this.userList[userIndex] = user;
    }
  }
  removeUser(id: number) {
    this.userList = this.userList.filter((x) => x.id != id);
  }
}
