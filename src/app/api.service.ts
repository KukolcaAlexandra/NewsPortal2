import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import apiKey from '../settings';
import { INews } from './interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSources() {
    return this.httpClient.get<any>(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.sources;
        })
    )
  }

  getNews(source) {
    return this.httpClient.get<INews>(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.articles;
        })
    )
  }

  getLocalNews() {
    return this.httpClient.get<INews>(`http://localhost:3000/news`)
    .pipe(
        map((response: any) => {
          return response;
        })
    )
  }

  onLoadNews(source) {
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=${source}&page=10&pageSize=20&apiKey=${apiKey}`)
    .pipe(
        map((response: any) => {
          return response.articles;
        })
    )
  }

  getNewsWithId(id: string) {
    return this.httpClient.get<INews>(`http://localhost:3000/news/${id}`)
    .pipe(
        map((response: any) => {
          return response;
        })
    )
  }

  updateNews(news: INews) {
    return this.httpClient.put<INews>(`http://localhost:3000/news/${news._id}`, news)
  }

  addNews(news: INews) {
    return this.httpClient.post<INews>(`http://localhost:3000/news`, news)
  }

  deleteNews(id: string) {
    return this.httpClient.delete<INews>(`http://localhost:3000/news/${id}`)
  }
}
