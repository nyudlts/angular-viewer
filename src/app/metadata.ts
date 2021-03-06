import { Field } from './field';
import { Map } from './map';
import { FieldCollection } from './fieldCollection';
import { FieldPartner } from './fieldPartner';

export class Metadata {
  title: Field;
  subtitle: Field;
  author: Field;
  publisher: Field;
  publication_location: Field;
  publication_date_text: Field;
  publication_date: Field;
  rights: Field;
  subject: Field;
  handle: Field;
  read_order: Field;
  scan_order: Field;
  binding_orientation: Field;
  page_count: Field;
  sequence_count: Field;
  call_number: Field;
  description: Field;
  identifier: Field;
  language: Field;
  language_code: Field;
  pdf_file: Field;
  collection: FieldCollection;
  partner: FieldPartner;
  image: Map;
};
