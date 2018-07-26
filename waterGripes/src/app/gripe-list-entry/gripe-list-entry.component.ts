import { Component, OnInit, Input} from '@angular/core';
import { Gripe } from '../gripe';

@Component({
  selector: 'app-gripe-list-entry',
  templateUrl: './gripe-list-entry.component.html',
  styleUrls: ['./gripe-list-entry.component.css']
})
export class GripeListEntryComponent implements OnInit {
  @Input() gripe: Gripe;
  
  constructor() { }

  ngOnInit() {
  }

}
