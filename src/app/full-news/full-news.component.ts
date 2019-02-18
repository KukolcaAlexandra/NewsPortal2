import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NewsService } from '../news.service';
import { localSourceName } from '../const';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent implements OnInit {
  @Input() sourceName: string;
  @Input() news: INews;
  @Input() newsId: any;
  title: string;
  publishedDate: string;
  description: string;
  author: string;
  url: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.currentNews;

    this.newsService.updatedCurrentNews.subscribe((news: any) => {
      this.news = news;
      this.title = news && news.title;
      this.description = news && (news.description || news.text || '');
      this.author = news && news.author;
      this.publishedDate = news && (news.date || news.publishedAt);
      this.url = news && news.urlToImage;
    });

    this.newsService.getNewsWithId(this.newsId);
  }

  checkSource() {
    if (this.sourceName === localSourceName) {
      return true;
    }
    return false;
  }

  onDelete() {
    this.newsService.deleteNews(this.newsId);
  }
}
