import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownUsersService {
  apiurl = '';

  constructor(private http:HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.apiurl=baseUrl+"user";
  }

  GetAll():Observable<object>
  {
    return this.http.get(this.apiurl);
  }
}
