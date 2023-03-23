import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {User} from "../dto/user";
import {Observable} from "rxjs";
import {CreateUserRequest} from "../dto/CreateUserRequest";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/getAllUser")
  }


  createUser(appUser : CreateUserRequest) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/createUser" , appUser);
  }

}
