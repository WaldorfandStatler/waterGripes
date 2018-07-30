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
    .subscribe(data => {
      console.log(data, ' this if from the server');
      addGripe.goBack();
    });
  }
  goBack(): void {
    this.location.back();
  }

  getPos(model): void {
    const id = model.id;
    const num = model.block_number;
    const street = model.street.split(' ').join('+');
    const address = `${num}+${street},+New+Orleans,+LA`;
    this.gripeService.getPostion(address, id);
  }

}
