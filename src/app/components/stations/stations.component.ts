import { Component, OnInit } from '@angular/core';
import { Station } from '../../services/station.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectStationList } from '../../store/selectors/station.selectors';
import { GetStations } from '../../store/actions/station.actions';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css'],
})
export class StationsComponent implements OnInit {
  stations: Station[];

  constructor(private store: Store<IAppState>) {
    this.store.pipe(select(selectStationList)).subscribe((data) => {
      this.stations = data;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetStations());
  }
}
