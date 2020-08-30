import { Station } from '../models/station';

export interface IStationState {
  stations: Station[];
  selectedStation: Station;
}

export const initialStationState: IStationState = {
  stations: [],
  selectedStation: null,
};
