import { Component, OnInit } from '@angular/core';
import { Gripe } from '../gripe';

@Component({
  selector: 'app-gripe-list',
  templateUrl: './gripe-list.component.html',
  styleUrls: ['./gripe-list.component.css']
})
export class GripeListComponent implements OnInit {
  gripe: Gripe = {
    id: 1,
    block_number: 800,
    street: 'St Charles',
    crossStreet: 'Washington',
    zipcode: 70115,
    latitude: null,
    longitude: null,
    gripe: 'sewer leak',
    comment: '',
    votes: 5,
    user_id: 1,
    status: 'Unresolved'
  }
  constructor() { }

  ngOnInit() {
  }

}
