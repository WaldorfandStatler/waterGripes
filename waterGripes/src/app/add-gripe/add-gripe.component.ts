import { Component, OnInit } from '@angular/core';
import { GripeService } from '../gripe.service';


@Component({
  selector: 'app-add-gripe',
  templateUrl: './add-gripe.component.html',
  styleUrls: ['./add-gripe.component.css']
})

export class AddGripeComponent implements OnInit {

  model: any = {}

  constructor(private gripeService: GripeService) { }

  ngOnInit() {
  }

  createGripe(model) {
    // this.Http.addGripe(model);
    this.gripeService.addGripe(model)
    .subscribe(data => {
      console.log(data, ' this if from the server');
    });

  }
}
