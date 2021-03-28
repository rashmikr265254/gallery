import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selection = 'gallery';

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (location.href.includes('gallery')) {
      this.selection = 'gallery';
    } else {
      this.selection = 'about';
    }
  }

  changeSelection(newSelection: string) {
    if (newSelection !== this.selection) {
      this.selection = newSelection;
      this.router.navigate([this.selection]);
    }
  }

}
