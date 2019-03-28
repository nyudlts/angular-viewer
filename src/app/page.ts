export class Page {
  isPartOf: string;
  sequence: number[];
  realPageNumber: number;
  cm: {
    uri: string;
    width: string;
    height: string;
    levels: string;
    dwtLevels: string;
    compositingLayerCount: string;
    timestamp: string;
  };
};
