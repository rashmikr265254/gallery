import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShowcaseComponent } from './gallery-showcase.component';

describe('GalleryShowcaseComponent', () => {
  let component: GalleryShowcaseComponent;
  let fixture: ComponentFixture<GalleryShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
