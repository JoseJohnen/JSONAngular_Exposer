import { Component, OnInit, Inject, inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DropdownUsersService } from './dropdown-users.service';

@Component({
  selector: 'app-dropdown-users',
  templateUrl: './dropdown-users.component.html',
  styleUrls: ['./dropdown-users.component.css']
})
export class DropdownUsersComponent implements OnInit {
  public l_users: User[] = [];
  userObservable$:any;
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('span') span!: ElementRef; //Not in use, but it's there
  @ViewChild('window') window!: ElementRef;

  constructor(private service:DropdownUsersService, @Inject('BASE_URL') baseUrl: string) {
  }

  OpenModal() {
    this.modal.nativeElement.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  CloseModal() {
    this.modal.nativeElement.style.display = "none";
  }

  GetAll()  {
    this.service.GetAll().subscribe(result => {
      this.userObservable$=result;
      console.log(this.userObservable$);
    })
  }

  ngOnInit(): void {
    this.GetAll();
  }

}

interface Address
{
    street: string; 
    suite: string;
    city: string; 
    zipcode: string;
    geo: Geo;
}

interface Company
{
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Geo
{
    lat: string;
    lng: string;
}

interface User
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}