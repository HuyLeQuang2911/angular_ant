import { Component } from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../dto/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users!: User[];
  constructor(private userService: UserServiceService) {}


  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }

}
