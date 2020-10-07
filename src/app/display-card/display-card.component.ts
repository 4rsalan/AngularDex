import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
