import {Injectable} from '@angular/core';
import {RepositoryHttpListService} from '../services/repository-http-list.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {RepositoryActionTypes} from '../constant/repositoryActionTypes';
import {map, mergeMap} from 'rxjs/operators';
import {RepositoryListLoadSuccess} from '../action/repository.action';
import {RepositoryModels} from '../models/repository.models';


@Injectable()
export class RepositoryEffects {

  constructor(private repositoryHttpService: RepositoryHttpListService, private actions$: Actions) {}

  @Effect()
  loadRepository$: Observable<Action> = this.actions$.pipe(
    ofType(RepositoryActionTypes.RepositoryListLoad),
    mergeMap(action => {
      console.log('action after filtering', action);
      return this.repositoryHttpService.getRepos().pipe(
        map((repository: Array<RepositoryModels>) => {
          console.log('repository from Effect()', repository);
          repository.map( item => {
            this.repositoryHttpService.getLanguages(item.languages_url).subscribe( data => item.languages = data);
            return item;
          });
          // Repository collections will become the payload of the LoadSuccess action.
          return new RepositoryListLoadSuccess(repository);
        })
      );
    })
  );
}
