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
  //sources = SOURCES;
  sources: any;
  articles: any = [];
  previousNews: any = [];
  sourceName: string = initialSourceName;
  previousSourceName: string = '';
  currentNews: INews;
  

  getSources() {
    this.apiService.getSources().subscribe(
      (sources: ISource[]) => {
        console.log(sources);
        this.sources = sources;
      },
      (error) => console.log(error)
    )
  }

  getNews(/*source*/) {
    //console.log(this.selectedSource);
    const sourceId = this.sources[this.selectedSource].id;
    const sourceName = this.sources[this.selectedSource].name;
    //console.log(source);
    this.apiService.getNews(sourceId).subscribe(
      (articles: INews[]) => {
        console.log(articles);
        this.articles = articles;
        this.updatedNews.emit(articles);
        this.sourceName = sourceName;
        this.updatedSourceName.emit(sourceName);
      }
    )
  }

  getLocalNews() {
    this.apiService.getLocalNews().subscribe(
      (articles: any) => {
        console.log(articles);
        this.articles = articles;
        this.updatedNews.emit(articles);
        this.sourceName = localSourceName;
        this.updatedSourceName.emit(localSourceName);
      }
    )
  }

  onCheckMyNews(checked: boolean) {
    console.log(checked);
    if (checked) {
      this.previousNews = this.articles;
      this.previousSourceName = this.sourceName;
      this.getLocalNews();
    } else {
      if (this.selectedSource >= 0) {
        //this.articles = this.sources[this.selectedSource];
        this.articles = this.previousNews;
        this.sourceName = this.previousSourceName;
        this.updatedSourceName.emit(this.previousSourceName);
        //alert(this.articles);
        //this.updatedNews.emit(this.articles);
      } else {
        this.articles = [];
        this.sourceName = initialSourceName;
        this.updatedSourceName.emit(initialSourceName);
      }
      this.updatedNews.emit(this.articles);
      //console.log(this.selectedSource);
      //console.log(this.articles);
    }
  }

  onLoadNews(/*source*/) {
    //console.log(this.selectedSource);
    const sourceId = this.sources[this.selectedSource].id;
    //const sourceName = this.sources[this.selectedSource].name;
    //console.log(source);
    this.apiService.onLoadNews(sourceId).subscribe(
      (articles: any) => {
        console.log(articles);
        this.articles = articles;
        this.updatedNews.emit(articles);
        //this.updatedSourceName.emit(sourceName);
      }
    )
  }

  //this.newsService.getNewsWithId(this.newsId);
  getNewsWithId(id: string) {
    //let newsWithId: INews;
    console.log(id);
    if (this.sourceName === localSourceName) {
      this.apiService.getNewsWithId(id).subscribe(
        (news: INews) => {
          console.log('news in news service');
          console.log(news);
          this.currentNews = news;
          this.updatedCurrentNews.emit(this.currentNews);
          
        }
      );
    } else {
      this.currentNews = this.articles[id];
      this.updatedCurrentNews.emit(this.currentNews);
    }
    //console.log('current news in news');
    //console.log(this.currentNews);
    //this.updatedCurrentNews.emit(this.currentNews);
  }

  updateNews(news: INews) {
    this.apiService.updateNews(news).subscribe(
      (res: any) => {
        console.log('update news');
        console.log(res);
        //this.currentNews = news;
        //this.updatedCurrentNews.emit(this.currentNews);
        
      }
    );
  }

  addNews(news: INews) {
    this.apiService.addNews(news).subscribe(
      (res: any) => {
        console.log('add news');
        console.log(res);
        //this.currentNews = news;
        //this.updatedCurrentNews.emit(this.currentNews);
        
      }
    );
  }

  deleteNews(id: string) {
    this.apiService.deleteNews(id).subscribe(
      (res: any) => {
        console.log('delete news');
        console.log(res);
        //this.currentNews = news;
        //this.updatedCurrentNews.emit(this.currentNews);
        this.getLocalNews();
              
      }
    );
  }

}
