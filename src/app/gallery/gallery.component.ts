import { Component, HostListener, OnInit } from '@angular/core';
import { IGalleryImage } from '../shared/gallery-image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  currentSelection: string;
  currentShowcase: IGalleryImage[];
  currentShowcaseType: string;
  windowWidth = window.innerWidth;

  private galleryType = {
    interior: 'interior',
    construction: 'construction',
    exterior: 'exterior',
    none: 'none'
  };

  private imagesMap = new Map<string, IGalleryImage[]>();

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.currentSelection = this.galleryType.none;
    }, 100);
    this.imagesMap.set(this.galleryType.interior, [
      { 
        title: 'POETS RESIDENCE',
        description: '1 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/azure-pipelines.jpeg',
        selected: false
      }, 
      { 
        title: 'POETS RESIDENCE',
        description: '2 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/2.jpeg',
        selected: false
      }, 
      { 
        title: 'POETS RESIDENCE',
        description: '3 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/3.jpeg',
        selected: false
      },
      { 
        title: 'POETS RESIDENCE',
        description: '4 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/4.jpeg',
        selected: false
      }
    ]);
    this.imagesMap.set(this.galleryType.exterior, [
      { 
        title: 'OTHER RESIDENCE',
        description: '1 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/azure-pipelines.jpeg',
        selected: false
      }, 
      { 
        title: 'OTHER RESIDENCE',
        description: '2 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/2.jpeg',
        selected: false
      }, 
      { 
        title: 'OTHER RESIDENCE',
        description: '3 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/3.jpeg',
        selected: false
      },
      { 
        title: 'OTHER RESIDENCE',
        description: '4 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/4.jpeg',
        selected: false
      }
    ]);
    this.imagesMap.set(this.galleryType.construction, [
      { 
        title: 'CONSTRUCTION',
        description: '1 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/azure-pipelines.jpeg',
        selected: false
      }, 
      { 
        title: 'CONSTRUCTION',
        description: '2 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/2.jpeg',
        selected: false
      }, 
      { 
        title: 'CONSTRUCTION',
        description: '3 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/3.jpeg',
        selected: false
      },
      { 
        title: 'CONSTRUCTION',
        description: '4 / 10 Strak Geometry reigns supreme throughout the dwelling',
        url: '/assets/imgs/boom/4.jpeg',
        selected: false
      }
    ]);
  }

  changeSubSection(newSubSection: string) {
    this.currentSelection = newSubSection;
    this.currentShowcase = this.imagesMap.get(newSubSection);
    switch (newSubSection) {
      case this.galleryType.construction:
        this.currentShowcaseType = 'Interiors';
        break;
      case this.galleryType.interior:
        this.currentShowcaseType = 'Exteriors';
        break;
      case this.galleryType.exterior:
        this.currentShowcaseType = 'Construction';
        break;
      case this.galleryType.none:
        this.currentShowcaseType = undefined;
        break;
    }
  }

}
