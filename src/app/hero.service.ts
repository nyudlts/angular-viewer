import { Injectable } from '@angular/core';
import { Book } from './book';
import { Field } from './field';
import { Observable, of } from 'rxjs';
import OpenSeadragon from 'openseadragon';
import { BOOK } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() {}

  public metadataPaneActive: boolean = true;

  public resourceViewState: boolean = false;

  public resourceRotation: number = 0;

  public resourceLocation: number = 1;

  public paginationPaneActive: boolean = false;

  public resource: any = {}

  isMetadataPaneActive(): boolean {
    return this.metadataPaneActive;
  }

  isPaginationPaneActive(): boolean {
    return this.paginationPaneActive;
  }

  showMetadataPane(): void {
    this.metadataPaneActive = true;
  }

  hideMetadataPane(): void {
    this.metadataPaneActive = false;
  }

  showPaginationPane(): void {
    this.paginationPaneActive = true;
  }

  hidePaginationPane(): void {
    this.paginationPaneActive = false;
  }

  getMetadata(): Observable<Book[]> {
    return of(BOOK);
  }

  getResourceRotation(): number {
    return this.resourceRotation;
  }

  getLabel(): Observable<Book[]> {
    return of(BOOK);
  }

  getSequenceCount(): Observable<Field> {
    return of(BOOK[0].metadata.sequence_count);
  }

  getMinSequenceCount(): Observable<number> {
    return of(1);
  }

  getResourceViewState(): boolean {
    return this.resourceViewState;
  }

  // check resourceViewState and toggle it; if true set false, else true
  toggleResourceViewState(): void {
    this.resourceViewState = !this.getResourceViewState();
  }

  createResource(resource: string, tileSourceId: any): void {
    this.getMetadata().subscribe(
      metadata => {
        metadata.filter(resource => {
         const iiifId = resource.pages[tileSourceId - 1];
         this.resource = OpenSeadragon({
           id: "resource",
           preserveViewport: true,
           visibilityRatio: 1,
           minZoomLevel: 1,
           defaultZoomLevel: 1,
           sequenceMode: true,
           tileSources: [iiifId.cm]
         });
        })
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  toggleMetadata (event: any): void {
    event.preventDefault();
    if (this.isMetadataPaneActive()) {
      this.hideMetadataPane();
    }
    else {
      this.showMetadataPane();
    }
  }

  toggleFullScreen (event: any): void {
    event.preventDefault();
    this.resource.viewport.setFullScreen(true);
  }

  // togglePagination(): void {
  //   this.paginationPaneActive = (this.isPaginationPaneActive()) ? false : true;
  // }

  togglePagination (event: any): void {
    event.preventDefault();
    if (this.isPaginationPaneActive()) {
      this.hidePaginationPane();
    }
    else {
      this.showPaginationPane();
    }
  }

  zoomIn (event: any): void {
    event.preventDefault();
    if (this.resource.viewport) {
      this.resource.zooming = false;
      this.resource.viewport.zoomBy(this.resource.zoomPerClick / 1.0);
      this.resource.viewport.applyConstraints();
    }
  }

  getMinZoom(): number {
    return this.resource.viewport.getMinZoom();
  }

  getMaxZoom(): number {
    return this.resource.viewport.getMaxZoom();
  }

  zoomOut (event: any): void {
    event.preventDefault();
    if (this.resource.viewport) {
      this.resource.zooming = false;
      this.resource.viewport.zoomBy(1.0 / this.resource.zoomPerClick);
      this.resource.viewport.applyConstraints();
    }
  }

  zoomOuted(): boolean {
    return this.resource.zooming;
  }

  rotateResource (event: any): void {
    event.preventDefault();
    const rotation = parseInt(360/4 + this.resource.viewport.getRotation(), 10);
    this.resource.viewport.setRotation(rotation);
  }

}
