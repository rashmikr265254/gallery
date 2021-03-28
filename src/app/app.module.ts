import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TitleComponent } from './shared/title/title.component';
import { SubGalleryComponent } from './gallery/sub-gallery/sub-gallery.component';
import { GalleryShowcaseComponent } from './gallery/gallery-showcase/gallery-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    TitleComponent,
    SubGalleryComponent,
    GalleryShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
