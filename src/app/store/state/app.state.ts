import { RouterReducerState } from '@ngrx/router-store';
import { IStationState, initialStationState } from './station.state';
import { IRequestState, initialRequestState } from './request.state';

export interface IAppState {
  router?: RouterReducerState;
  stations: IStationState;
  requests: IRequestState;
}

export const initialAppState: IAppState = {
  stations: initialStationState,
  requests: initialRequestState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
