import { EStationActions, StationActions } from '../actions/station.actions';
import { initialStationState, IStationState } from '../state/station.state';

export const stationReducers = (
  state = initialStationState,
  action: StationActions
): IStationState => {
  switch (action.type) {
    case EStationActions.GetStationsSuccess: {
      return {
        ...state,
        stations: [...action.payload],
      };
    }
    case EStationActions.GetStation: {
      const id = action.payload;
      return {
        ...state,
        selectedStation: state.stations.find((s) => s.id === id),
      };
    }
    default:
      return state;
  }
};
