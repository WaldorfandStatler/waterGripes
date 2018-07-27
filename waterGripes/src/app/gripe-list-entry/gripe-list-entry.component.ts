import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gripe } from '../gripe';
import { GripeService } from '../../gripe.service';


@Component({
  selector: 'app-gripe-list-entry',
  templateUrl: './gripe-list-entry.component.html',
  styleUrls: ['./gripe-list-entry.component.css']
})
export class GripeListEntryComponent implements OnInit {
  @Input() gripe: Gripe;
  
  constructor(
    private route: ActivatedRoute,
    private gripeService: GripeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGripe();
  }

  getGripe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gripeService.getGripe(id)
      .subscribe(gripe => this.gripe = gripe);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.gripeService.updateGripevote(this.gripe)
      .subscribe(() => this.goBack());
  }


}
