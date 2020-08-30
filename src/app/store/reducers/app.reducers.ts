import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { stationReducers } from './station.reducers';
import { requestReducers } from './request.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  stations: stationReducers,
  requests: requestReducers,
};
