import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { EStationActions, GetStations } from '../actions/station.actions';
import { StationService } from '../../services/station.service';

@Injectable()
export class StationEffects {
  constructor(
    private stationService: StationService,
    private actions: Actions
  ) {}

  @Effect()
  getStations = this.actions.pipe(
    ofType<GetStations>(EStationActions.GetStations),
    switchMap(() => {
      return this.stationService.getAllStation().pipe(
        map((stations) => {
          return {
            type: EStationActions.GetStationsSuccess,
            payload: stations.features,
          };
        })
      );
    })
  );
}
