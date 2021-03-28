import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animate = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 200)
  }

}
