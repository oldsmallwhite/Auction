import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rate: number;

  private stars: boolean[];

  @Input()
  private readonly: boolean = true;

  @Output()
  private rateChange: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  starClick(i: number) {
    if (this.readonly) return;
    this.rate = i + 1;
    this.ngOnInit();

    this.rateChange.emit(this.rate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rate);
    }
  }

}
