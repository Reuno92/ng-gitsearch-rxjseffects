import {RepositoryActionTypes} from '../constant/repositoryActionTypes';
import {RepositoryActions} from '../action/repository.action';
import {RepositoryState} from '../store/respository.store';

export const INITIAL_STATE: RepositoryState = {
  repositories: [],
  requestedAt: null,
  errorCode: null,
  errorStatus: '',
  errorMessage: '',
};

export function repositoryReducer(state= INITIAL_STATE, action: RepositoryActions) {

  switch (action.type) {
    case RepositoryActionTypes.RepositoryListLoadSuccess:
      return {
        ...state,
        repositories: action.payload,
        requestedAt: new Date().toLocaleTimeString(),
        errorCode: null,
        errorStatus: '',
        errorMessage: '',
      };
    default:
      return {
        ...state
      };
  }
}

