import { Injectable, EventEmitter } from '@angular/core';
import { SOURCES } from './mock-news-sources';
import { ApiService } from './api.service';
import { INews, ISource } from './interfaces/news';
import { initialSourceName, localSourceName } from './const';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private apiService: ApiService) { }

  public updatedNews: EventEmitter<any> = new EventEmitter();
  public updatedSourceName: EventEmitter<string> = new EventEmitter();
  public updatedCurrentNews: EventEmitter<INews> = new EventEmitter();
  selectedSource: number;
  sources: ISource[];
  articles: any = [];
  previousNews: any = [];
  sourceName: string = initialSourceName;
  previousSourceName: string;
  currentNews: INews;

  getSources() {
    this.apiService.getSources().subscribe(
      (sources: ISource[]) => {
        this.sources = sources;
      },
      (error) => console.log(error)
    );
  }

  getNews() {
    const sourceId = this.sources[this.selectedSource].id;
    const sourceName = this.sources[this.selectedSource].name;
    this.apiService.getNews(sourceId).subscribe(
      (articles: INews[]) => {
        this.articles = articles;
        this.updatedNews.emit(articles);
        this.sourceName = sourceName;
        this.updatedSourceName.emit(sourceName);
      }
    );
  }

  getLocalNews() {
    this.apiService.getLocalNews().subscribe(
      (articles: any) => {
        this.articles = articles;
        this.updatedNews.emit(articles);
        this.sourceName = localSourceName;
        this.updatedSourceName.emit(localSourceName);
      }
    );
  }

  onCheckMyNews(checked: boolean) {
    if (checked) {
      this.previousNews = this.articles;
      this.previousSourceName = this.sourceName;
      this.getLocalNews();
    } else {
      if (this.selectedSource >= 0) {
        this.articles = this.previousNews;
        this.sourceName = this.previousSourceName;
        this.updatedSourceName.emit(this.previousSourceName);
      } else {
        this.articles = [];
        this.sourceName = initialSourceName;
        this.updatedSourceName.emit(initialSourceName);
      }
      this.updatedNews.emit(this.articles);
    }
  }

  onLoadNews() {
    const sourceId = this.sources[this.selectedSource].id;
    this.apiService.onLoadNews(sourceId).subscribe(
      (articles: any) => {
        this.articles = articles;
        this.updatedNews.emit(articles);
      }
    );
  }

  getNewsWithId(id: string) {
    if (this.sourceName === localSourceName) {
      this.apiService.getNewsWithId(id).subscribe(
        (news: INews) => {
          this.currentNews = news;
          this.updatedCurrentNews.emit(this.currentNews);
        }
      );
    } else {
      this.currentNews = this.articles[id];
      this.updatedCurrentNews.emit(this.currentNews);
    }
  }

  updateNews(news: INews) {
    this.apiService.updateNews(news).subscribe(
      () => {
        console.log('update news');
      }
    );
  }

  addNews(news: INews) {
    this.apiService.addNews(news).subscribe(
      () => {
        console.log('add news');
      }
    );
  }

  deleteNews(id: string) {
    this.apiService.deleteNews(id).subscribe(
      (res: any) => {
        console.log('delete news');
        this.getLocalNews();
      }
    );
  }

  logIn() {
    this.apiService.logIn().subscribe(
      (res: any) => {
        console.log('log in');
        console.log(res);
      }
    );
  }

}
