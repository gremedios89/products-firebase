import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { GithubApi } from '../models/githubapi.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {
  private readonly API: string = 'https://api.github.com/search/issues';

  constructor(private _httpClient: HttpClient) { }

  getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
    const requestUrl = `${this.API}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
