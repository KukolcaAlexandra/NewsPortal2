import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiKey, newsapiUrl, localNewsUrl, loginUrl } from '../settings';
import { INews } from './interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSources() {
    return this.httpClient.get<any>(`${newsapiUrl}/sources?apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.sources;
        })
    );
  }

  getNews(source) {
    return this.httpClient.get<INews>(`${newsapiUrl}/top-headlines?sources=${source}&apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.articles;
        })
    );
  }

  getLocalNews() {
    return this.httpClient.get<INews>(`${localNewsUrl}`)
    .pipe(
        map((response: any) => {
          return response;
        })
    );
  }

  onLoadNews(source) {
    return this.httpClient.get<any>(`${newsapiUrl}/top-headlines?sources=${source}&page=10&pageSize=20&apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.articles;
        })
    );
  }

  getNewsWithId(id: string) {
    return this.httpClient.get<INews>(`${localNewsUrl}/${id}`)
    .pipe(
        map((response: any) => {
          return response;
        })
    );
  }

  updateNews(news: INews) {
    return this.httpClient.put<INews>(`${localNewsUrl}/${news._id}`, news);
  }

  addNews(news: INews) {
    return this.httpClient.post<INews>(`${localNewsUrl}`, news);
  }

  deleteNews(id: string) {
    return this.httpClient.delete<INews>(`${localNewsUrl}/${id}`);
  }

  logIn() {
    const userData = {
      username: 'alex',
      password: '123'
    };

    return this.httpClient.post<any>(`${loginUrl}`, userData);
  }
}
