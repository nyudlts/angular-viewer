import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { HeroService } from '../hero.service';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})

export class PagerComponent implements OnInit {
  private autoTicks = false;
  private disabled = false;
  private invert = false;
  private thumbLabel = false;
  private vertical = false;
  private showTicks = false;
  private step: number = 1;
  private value: number = 0;
  private max: number = 0;
  private min: number = 0;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }

  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }

  private _tickInterval = 1;

  constructor (public heroService: HeroService) {}

  ngOnInit() {
    this.value = this.heroService.resourceLocation;
    this.getMaxSequenceCount();
    this.getMinSequenceCount();
    this.route.snapshot.paramMap.get('page');
  }

  getMaxSequenceCount(): void {
    this.heroService.getSequenceCount().subscribe(data => {
      this.max = parseInt(data.value[0], 10);
    });
  }

  getMinSequenceCount(): void {
    this.heroService.getMinSequenceCount().subscribe(data => {
      this.min = data;
    });
  }

}
