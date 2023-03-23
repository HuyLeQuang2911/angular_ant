import { Component } from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../dto/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreateUserRequest} from "../../dto/CreateUserRequest";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users!: User[];
  validateForm: FormGroup;
  constructor(private userService: UserServiceService,
              private fb: FormBuilder) {

    this.validateForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password : ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      age: [''],
      phone : [''],
      fullName : []
    });

  }


  ngOnInit() {

    this.loadUser();

  }

  loadUser() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }

  submitForm() {
    let appUser : CreateUserRequest = {
      userName : this.validateForm.value.userName,
      phone : this.validateForm.value.phone,
      encrytedPassword : this.validateForm.value.password,
      age : this.validateForm.value.age,
      email : this.validateForm.value.email,
      fullName : this.validateForm.value.fullName
    }

    this.userService.createUser(appUser).subscribe(
      data => {
        alert("Thanh cong")
        this.loadUser();
      } ,
      error => {
        alert(error);
      }
    )
  }
}
