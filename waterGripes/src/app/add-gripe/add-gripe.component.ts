import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gripe } from '../gripe';
import { GripeService } from '../gripe.service';


@Component({
  selector: 'app-add-gripe',
  templateUrl: './add-gripe.component.html',
  styleUrls: ['./add-gripe.component.css']
})

export class AddGripeComponent implements OnInit {

  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private gripeService: GripeService,
    private location: Location
  ) {}

  ngOnInit() {}

  createGripe(model) {
    const addGripe = this;
    addGripe.gripeService.addGripe(model)
    .subscribe(() => {
      console.log('gripe added');
      addGripe.goBack();
    });
    // this.getPos(model);//not firing correctly
    
  }
  goBack(): void {
    this.location.back();
  }

  getPos(model): void {
    console.log(model);
    
    const id = model.id;
    const num = model.blockNumber;
    const street = model.street.split(' ').join('+');
    const address = `${num}+${street},+New+Orleans,+LA`;
    this.gripeService.getPostion(address, id);
  }

}
