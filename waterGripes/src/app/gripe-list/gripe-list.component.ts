import { Component, OnInit } from '@angular/core';
import { Gripe } from '../gripe';
import { GRIPES } from '../mock-gripes';

@Component({
  selector: 'app-gripe-list',
  templateUrl: './gripe-list.component.html',
  styleUrls: ['./gripe-list.component.css']
})
export class GripeListComponent implements OnInit {

  gripes = GRIPES;

  selectedGripe : Gripe;

  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSelect(gripe: Gripe): void {
    this.selectedGripe = gripe;
  }

}
