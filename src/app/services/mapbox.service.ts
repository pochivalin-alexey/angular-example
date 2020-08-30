import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import style from '../map/style';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectStationList } from '../store/selectors/station.selectors';

@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  map: mapboxgl.Map;
  style = style();

  constructor(private store: Store<IAppState>, private router: Router) {}

  buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
    });

    this.map.on('load', () => {
      this.store.pipe(select(selectStationList)).subscribe((data) => {
        (this.map.getSource('point') as mapboxgl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: data as any,
        });
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      this.map.on('mouseenter', 'point', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'point', () => {
        this.map.getCanvas().style.cursor = '';
      });

      this.map.on('click', (e) => {
        // set bbox as 5px reactangle area around clicked point
        const bbox = [
          [e.point.x - 5, e.point.y - 5],
          [e.point.x + 5, e.point.y + 5],
        ] as [mapboxgl.PointLike, mapboxgl.PointLike];
        const features = this.map.queryRenderedFeatures(bbox, {
          layers: ['point'],
        });
        if (features.length) {
          this.router.navigate(['/all-station', features[0].properties['@id']]);
        }
      });
    });
  }
}
