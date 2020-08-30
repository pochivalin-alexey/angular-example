export interface Station {
  type: string;
  id: string;
  properties: {
    '@id': string;
    operator: string;
    description?: string;
    'socket:type2'?: string;
    'socket:yazaki'?: string;
    'socket:schuko'?: string;
    website?: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}
