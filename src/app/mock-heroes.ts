import { Book } from './book';

export const BOOK: Book[] = [ {
  "entity_title": " Aḥwāl al-nafs",
  "identifier": "aub_aco000001",
  "entity_language": "en",
  "entity_status": "1",
  "entity_type": "dlts_book",
  "metadata": {
    "title": {
      "label": "Title",
      "value": [" Aḥwāl al-nafs"],
      "field_type": "text_textfield",
      "machine_name": "field_title"
    },
    "subtitle": {
      "label": "Subtitle",
      "value": ["risālah fī al-nafs wa-baqāʼihā wa-maʻādahā"],
      "field_type": "text_textfield",
      "machine_name": "field_subtitle"
    },
    "author": {
      "label": "Author/Contributor",
      "value": ["Avicenna, 980-1037, author.", "Ahwānī, Aḥmad Fuʼād, -1970, author of introduction."],
      "field_type": "text_textfield",
      "machine_name": "field_author"
    },
    "publisher": {
      "label": "Publisher",
      "value": ["Dār Iḥyāʼ al-Kutub al-ʻArabīyah"],
      "field_type": "text_textfield",
      "machine_name": "field_publisher"
    },
    "publication_location": {
      "label": "Place of Publication",
      "value": ["Miṣr"],
      "field_type": "text_textfield",
      "machine_name": "field_publication_location"
    },
    "publication_date_text": {
      "label": "Date of Publication",
      "value": ["1371 H. = 1952 M"],
      "field_type": "date_text",
      "machine_name": "field_publication_date_text"
    },
    "publication_date": {
      "label": "Date of Publication",
      "value": ["1952-01-01T00:00:00"],
      "field_type": "date_text",
      "machine_name": "field_publication_date"
    },
    "collection": {
      "label": "Collection",
      "value": [{
        "title": "Arabic Collections Online",
        "type": "dlts_collection",
        "language": "und",
        "identifier": "4c9072b1-a7bc-4321-b65d-d97d907397b5",
        "code": "aco",
        "name": "Arabic Collections Online",
        "partner": {
          "title": "American University of Beirut",
          "type": "dlts_partner",
          "language": "und",
          "identifier": "425112ff-e348-437e-bb47-a4d8a1c6541e",
          "code": "aub",
          "name": "American University of Beirut"
        }
      }],
      "field_type": "node_reference_autocomplete",
      "machine_name": "field_collection"
    },
    "partner": {
      "label": "Partner",
      "value": [{
        "title": "American University of Beirut",
        "type": "dlts_partner",
        "language": "und",
        "identifier": "425112ff-e348-437e-bb47-a4d8a1c6541e",
        "code": "aub",
        "name": "American University of Beirut"
      }],
      "field_type": "node_reference_autocomplete",
      "machine_name": "field_partner"
    },
    "handle": {
      "label": "Permanent Link",
      "value": ["http://hdl.handle.net/2333.1/gqnk9fdc\n"],
      "field_type": "link_field",
      "machine_name": "field_handle"
    },
    "read_order": {
      "label": "Read Order",
      "value": ["1"],
      "field_type": "options_buttons",
      "machine_name": "field_read_order"
    },
    "scan_order": {
      "label": "Scan Order",
      "value": ["1"],
      "field_type": "options_buttons",
      "machine_name": "field_read_order"
    },
    "binding_orientation": {
      "label": "Binding Orientation",
      "value": ["0"],
      "field_type": "options_buttons",
      "machine_name": "field_read_order"
    },
    "page_count": {
      "label": "Read Order",
      "value": ["10"],
      "field_type": "number",
      "machine_name": "field_page_count"
    },
    "sequence_count": {
      "label": "Read Order",
      "value": ["10"],
      "field_type": "number",
      "machine_name": "field_sequence_count"
    },
    "call_number": {
      "label": "Call Number",
      "value": ["B751 .A28 1952"],
      "field_type": "text_textfield",
      "machine_name": "field_call_number"
    },
    "description": {
      "label": "Description",
      "value": [""],
      "field_type": "text_textfield",
      "machine_name": "field_description"
    },
    "identifier": {
      "label": "Identifier",
      "value": ["aub_aco000001"],
      "field_type": "text_textfield",
      "machine_name": "field_identifier"
    },
    "language": {
      "label": "Language",
      "value": ["Arabic"],
      "field_type": "text_textfield",
      "machine_name": "field_language"
    },
    "language_code": {
      "label": "Language",
      "value": ["ara"],
      "field_type": "text_textfield",
      "machine_name": "field_language_code"
    },
    "pdf_file": {
      "label": "PDF",
      "value": ["fileserver://books/aub_aco000001_hi.pdf", "fileserver://books/aub_aco000001_lo.pdf"],
      "field_type": "file_generic",
      "machine_name": "field_pdf_filer"
    },
    "image": {
      "isPartOf": "aub_aco000001",
      "sequence": 1,
      "realPageNumber": 1,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/princeton_aco000380_afr01_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    },
    "rights": {
      "label": "Rights",
      "value": ["\n    NYU believes the materials displayed on this site are all in the\n    public domain. However, if you believe that you are the\n    copyright owner of any material displayed here, please see our\n    takedown policy: http://dlib.nyu.edu/aco/takedownpolicy/\n  "],
      "field_type": "text_textarea",
      "machine_name": "field_rights"
    },
    "subject": {
      "label": "Subject",
      "value": ["Soul -- Islam", "Self (Philosophy) -- Early works to 1800", "Islamic philosophy -- Early works to 1800", "Psychology -- Early works to 1850"],
      "field_type": "taxonomy_autocomplete",
      "machine_name": "field_subject"
    }
  },
  "multivolume": {
    "volume": ""
  },
  "series": [],
  "pages": [
      {
      "isPartOf": "aub_aco000001",
      "sequence": 1,
      "realPageNumber": 1,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000002_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 2,
      "realPageNumber": 2,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000002_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 3,
      "realPageNumber": 3,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000003_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 4,
      "realPageNumber": 4,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000004_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 5,
      "realPageNumber": 5,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000005_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 6,
      "realPageNumber": 6,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000006_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 7,
      "realPageNumber": 7,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000007_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 8,
      "realPageNumber": 8,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000008_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 9,
      "realPageNumber": 9,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000009_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }, {
      "isPartOf": "aub_aco000001",
      "sequence": 10,
      "realPageNumber": 10,
      "cm": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "profile": [ "http://iiif.io/api/image/2/level2.json" ],
        "protocol": "http://iiif.io/api/image",
        "@id": "http://localhost:8182/iiif/2/aub_aco000001_n000010_d.jp2",
        "height": 3840,
        "width": 2717,
        "tiles": [{
          "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
          "width": 1024
        }]
      }
    }
   ]
  }
];
