import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GenericObject, RepositoryModels} from '../models/repository.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryHttpListService {

  private reposUrl = 'https://api.github.com/users/reuno92/repos?sort=updated&direction=desc';

  constructor(private http: HttpClient) { }

  public getRepos(): Observable<RepositoryModels[]> {
    return this.http.get<RepositoryModels[]>(this.reposUrl, { headers: new HttpHeaders(), responseType: 'json'});
  }

  public getLanguages(url: string): Observable<GenericObject<number>> {
    return this.http.get<any>(url, { headers: new HttpHeaders(), responseType: 'json'});
  }
}
