import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../../services/mapbox.service';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
})
export class MapboxComponent implements OnInit {
  constructor(private map: MapboxService) {}

  ngOnInit(): void {
    this.map.buildMap();
  }
}
