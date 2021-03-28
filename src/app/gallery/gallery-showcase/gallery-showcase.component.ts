import { Component, HostListener, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IGalleryImage } from 'src/app/shared/gallery-image';

@Component({
  selector: 'app-gallery-showcase',
  templateUrl: './gallery-showcase.component.html',
  styleUrls: ['./gallery-showcase.component.scss']
})
export class GalleryShowcaseComponent implements OnChanges {

  @Input()
  images: IGalleryImage[];

  @Input()
  type: string;

  selectedImage: IGalleryImage;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.images && this.images.length > 0) {
      if (!this.selectedImage) {
        this.selectedImage = this.images[0];
        this.images.forEach(item => item.selected = false);
        this.selectedImage.selected = true;
      }
    }
  }

  selectImage(image: IGalleryImage) {
    this.images.forEach(item => item.selected = false);
    this.selectedImage = image;
    image.selected = true;
  }


}
