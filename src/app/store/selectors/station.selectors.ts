import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IStationState } from '../state/station.state';

const selectStations = (state: IAppState) => state.stations;

export const selectStationList = createSelector(
  selectStations,
  (state: IStationState) => {
    return state.stations;
  }
);

export const selectSelectedStation = createSelector(
  selectStations,
  (state: IStationState) => state.selectedStation
);
