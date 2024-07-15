import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(skip = 0, limit = 10){
    return this.http.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  }

  getSearch(name:string){
    return this.http.get(`https://dummyjson.com/users/search?q=${name}`);
  }
}
