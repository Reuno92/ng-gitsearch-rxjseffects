import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RepositoryModels} from '../models/repository.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryHttpListService {

  private reposUrl = 'https://api.github.com/users/reuno92/repos?sort=updated&direction=desc';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<RepositoryModels[]> {
    return this.http.get<RepositoryModels[]>(this.reposUrl, { headers: new HttpHeaders(), responseType: 'json'});
  }
}
