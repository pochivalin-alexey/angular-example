import { Action } from '@ngrx/store';

import { Station } from '../models/station';

export enum EStationActions {
  GetStations = '[Stations] Get Stations',
  GetStationsSuccess = '[Stations] GetStationsSuccess',
  GetStation = '[Stations] GetStation',
  GetStationSuccess = '[Dialog] GetStationSuccess',
}

export class GetStations implements Action {
  public readonly type = EStationActions.GetStations;
}

export class GetStationsSuccess implements Action {
  public readonly type = EStationActions.GetStationsSuccess;
  constructor(public payload: Station[]) {}
}

export class GetStation implements Action {
  public readonly type = EStationActions.GetStation;
  constructor(public payload: string) {}
}

export type StationActions = GetStations | GetStationsSuccess | GetStation;
