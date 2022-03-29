import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User: User={
    "id":890,
    "name": "swaraj varma",
    "email" :"swaraj.varma@outllook.com",
    "mobile":7890501502
  }
  constructor() { }

  ngOnInit(): void {
  }

}
