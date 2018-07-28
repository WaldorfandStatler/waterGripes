import { Component, OnInit } from '@angular/core';

import { Gripe } from '../gripe';
import { GripeService } from '../gripe.service';

@Component({
  selector: 'app-add-gripe',
  templateUrl: './add-gripe.component.html',
  styleUrls: ['./add-gripe.component.css']
})
export class AddGripeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
