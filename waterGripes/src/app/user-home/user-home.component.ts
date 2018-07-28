import { Component, OnInit } from '@angular/core';

import { Gripe } from '../gripe';
import { GripeService } from '../gripe.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  
  selectedGripe: Gripe;

  gripes: Gripe[];


  constructor(private gripeService: GripeService) { }

  ngOnInit() {
    this.getGripes();
  }

  getGripes(): void {
    this.gripeService.getGripes()
      .subscribe(gripes => this.gripes = gripes);
  }

  onSelect(gripe: Gripe): void {
    console.log('click');
    this.selectedGripe = gripe;
  }
}
