import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../dto/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/getAllUser")
  }

}
