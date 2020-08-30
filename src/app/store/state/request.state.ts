import { Request } from '../models/request';

export interface IRequestState {
  requests: Request[];
}

export const initialRequestState: IRequestState = {
  requests: [],
};
