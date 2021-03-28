import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-gallery',
  templateUrl: './sub-gallery.component.html',
  styleUrls: ['./sub-gallery.component.scss']
})
export class SubGalleryComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  typeFull: string;

  @Input()
  title: string;

  @Input()
  photoCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
