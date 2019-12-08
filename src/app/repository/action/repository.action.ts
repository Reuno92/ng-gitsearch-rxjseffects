import { Action } from '@ngrx/store';
import { RepositoryActionTypes } from '../constant/repositoryActionTypes';
import {RepositoryModels} from '../models/repository.models';

export class RepositoryListLoad implements Action {
  type = RepositoryActionTypes.RepositoryListLoad;
  constructor(public payload: any = null) {}
}

export class RepositoryListLoadSuccess implements Action {
  type = RepositoryActionTypes.RepositoryListLoadSuccess;
  constructor(public payload: RepositoryModels[]) {}
}

export type RepositoryActions =
  RepositoryListLoad
  | RepositoryListLoadSuccess;
