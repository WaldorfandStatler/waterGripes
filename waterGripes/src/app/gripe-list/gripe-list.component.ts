import { Component, OnInit } from '@angular/core';

import { Gripe } from '../gripe';
import { GripeService } from '../../gripe.service';

@Component({
  selector: 'app-gripe-list',
  templateUrl: './gripe-list.component.html',
  styleUrls: ['./gripe-list.component.css']
})
export class GripeListComponent implements OnInit {

  gripes: Gripe[];
  
  constructor(private gripeService: GripeService) { }
  
  ngOnInit() {
    this.getGripes();
  }
  
  getGripes(): void {
    this.gripeService.getGripes()
      .subscribe(gripes => this.gripes = gripes);
  }

}
