import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoryListComponent} from './components/repository-list/repository-list.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {repositoryReducer} from './reducer/repository.reducer';
import {EffectsModule} from '@ngrx/effects';
import {RepositoryEffects} from './effects/repository.effect';

@NgModule({
  declarations: [RepositoryListComponent],
  exports: [
    RepositoryListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('repositoryReducer', repositoryReducer),
    StoreDevtoolsModule,
    EffectsModule.forFeature([RepositoryEffects])
  ]
})
export class RepositoryModule { }
