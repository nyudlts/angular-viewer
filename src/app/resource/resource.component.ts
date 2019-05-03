import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit, OnDestroy {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public heroService: HeroService
  ) {}

  public identifier: string = '1';

  public page: string = '1';

  ngOnInit() {
    this.identifier = this.route.snapshot.paramMap.get('identifier');
    this.page = this.route.snapshot.paramMap.get('page');
    this.heroService.createResource(this.identifier, this.page);
  }

  ngOnDestroy() {}

}
