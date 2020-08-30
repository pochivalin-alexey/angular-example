import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IRequestState } from '../state/request.state';

const selectRequests = (state: IAppState) => state.requests;

export const selectRequestList = createSelector(
  selectRequests,
  (state: IRequestState) => state.requests
);
