import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gripe } from '../gripe';
import { GripeService } from '../gripe.service';
import { log } from 'util';


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
      .subscribe(gripe => {
        this.gripe = gripe[0];
        this.getMap();
      })
  }

  goBack(): void {
    this.location.back();
  }

  vote(votes): void {
    this.gripe.votes
      ? this.gripeService.updateGripevote(this.gripe.id, votes)
      : console.log('votes at 0');
    this.goBack();
  }

  getMap(): void{
    const id = this.gripe.id;
    const num = this.gripe.block_number;
    const street = this.gripe.street.split(' ').join('+');
    const address = `${num}+${street},+New+Orleans,+LA`;
    const pos = this.gripeService.getPostion(address, id);
  }

}
