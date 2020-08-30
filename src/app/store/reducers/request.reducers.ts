import { ERequestActions, RequestActions } from '../actions/request.actions';
import { initialRequestState, IRequestState } from '../state/request.state';

export const requestReducers = (
  state = initialRequestState,
  action: RequestActions
): IRequestState => {
  switch (action.type) {
    case ERequestActions.AddRequest: {
      const request = { ...action.payload };
      request.id = state.requests.length + 1;
      return {
        ...state,
        requests: [...state.requests, request],
      };
    }
    default:
      return state;
  }
};
