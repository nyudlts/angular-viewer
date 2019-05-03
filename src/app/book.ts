import { Metadata } from './metadata';
import { Multivolume } from './multivolume';
import { Series } from './series';
import { Page } from './page';

export class Book {
  entity_title: string;
  identifier: string;
  entity_language: string;
  entity_status: string;
  entity_type: string;
  pages: Page[];
  metadata: Metadata;
  multivolume: Multivolume;
  series: Series[];
}
