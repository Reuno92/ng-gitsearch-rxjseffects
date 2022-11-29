import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {RepositoryListLoad} from '../../action/repository.action';
import {getAllRepository, getRequestDatetime} from '../../selector/repository.selectors';
import {GenericObject, RepositoryModels} from '../../models/repository.models';
import {Observable} from 'rxjs';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  public repository$: Observable<RepositoryModels[]>;
  public requestDates$: Observable<Date>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new RepositoryListLoad());
    this.repository$ = this.store.select(getAllRepository);
    this.requestDates$ = this.store.select(getRequestDatetime);
  }

  public getPercentage(technos: GenericObject<number>, value: number): number {
    const total = Object.values(technos).reduce((a: number, b: number) => a + b);
    return Math.round((value / total) * 100);
  }

  public valueAscOrder(a: KeyValue<number, string>, b: KeyValue<number, string>): number {
    return a.value.localeCompare(b.value);
  }
}
