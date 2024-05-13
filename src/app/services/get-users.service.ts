import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private _HttpClient:HttpClient) { }

  getPage(page:number = 1):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  }

  getPage2(page:number = 2):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  }



}
