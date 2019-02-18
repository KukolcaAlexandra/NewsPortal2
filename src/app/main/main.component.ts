import { Component, OnInit } from '@angular/core';
import { ISource, SOURCES } from '../mock-news-sources';
import { INews } from '../interfaces/news';
import { NEWS, LOCAL_NEWS } from '../mock-news';
import { NewsService } from '../news.service';
import { initialSourceName, localSourceName } from '../const';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {

  title = 'newsPortal';
  currentSource: ISource;
  sourceName: string = initialSourceName;
  news: INews[];
  currentNews: INews[];
  localSource: INews[];
  currentIndex: number;
  showLoadButton = false;
  newsCount = 5;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.updatedNews.subscribe((news: any) => {
      this.news = news;
      this.currentNews = this.news.slice(0, this.newsCount);
    });
    this.newsService.updatedSourceName.subscribe((sourceName: string) => {
      this.sourceName = sourceName;
      if (sourceName === initialSourceName) {
        this.showLoadButton = false;
      } else {
        this.showLoadButton = true;
      }
    });
  }

  filterNews(keywords: string[]) {
    if (this.currentNews) {
      const filteredList = this.currentNews.filter(news => {
        return keywords.some(keyword => {
          if (news.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            return true;
          }
          if (news.description && news.description.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            return true;
          }
          if (news.text && news.text.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            return true;
          }
        });
      });
      this.currentNews = filteredList;
    }

    if (keywords.length === 0) {
      this.currentNews = this.news.slice(0, this.newsCount);
    }

  }

  loadNews(event: any) {
    if (this.newsCount >= 5) {
      this.newsCount += 5;
      this.currentNews = this.news.slice(0, this.newsCount);
    }
  }

  updateCount(event: any) {
    if (this.newsCount !== 5) {
      this.newsCount = 5;
    }
  }
}
