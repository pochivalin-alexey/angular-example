import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private http: HttpClient) {}

  getAllStation(): Observable<any> {
    return this.http.get('assets/charging_station_msk.json');
  }
}
