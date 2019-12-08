import {RepositoryModels} from '../models/repository.models';

export interface RepositoryState {
  repositories: RepositoryModels[];
  requestedAt: Date;
  errorCode: number;
  errorStatus: string;
  errorMessage: string;
};
