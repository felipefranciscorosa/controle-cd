import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from '../model/cd';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() cds!: Array<Cd>;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
