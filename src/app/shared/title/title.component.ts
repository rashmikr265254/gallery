import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges {

  @Input()
  name: string;

  @Input()
  subtitle: string;

  @Input()
  isVisible = false;

  animateVisible = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.animateVisible = this.isVisible;
      console.log(this.animateVisible);
    }, 100);
  }

}
