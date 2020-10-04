import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss']
})
export class DayHeaderComponent implements OnInit {

  @Input() dayDate: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
