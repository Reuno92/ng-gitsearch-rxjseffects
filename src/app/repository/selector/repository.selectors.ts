import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepositoryState } from '../store/respository.store';


export const getRepositoryState = createFeatureSelector<RepositoryState>('repositoryReducer');

export const getAllRepository = createSelector(getRepositoryState, data => data.repositories);

export const getRequestDatetime = createSelector(getRepositoryState, data => data.requestedAt);
