import { Action } from '@ngrx/store';

import { Request } from '../models/request';

export enum ERequestActions {
  AddRequest = '[Dialog] AddRequest',
}

export class AddRequest implements Action {
  public readonly type = ERequestActions.AddRequest;
  constructor(public payload: Request) {}
}

export type RequestActions = AddRequest;
