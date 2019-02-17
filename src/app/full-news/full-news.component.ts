import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NewsService } from '../news.service';

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
  date: string;
  description: string;
  author: string;
  url: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.currentNews;

    
    this.newsService.updatedCurrentNews.subscribe((news: any) => {
      console.log('UPDATE');
      console.log(news);
      this.news = news;
      this.title = news && news.title;
      this.description = news && (news.description || news.text || '');
      this.author = news && news.author;
      this.date = news && (news.date || news.publishedAt);
      this.url = news && news.urlToImage;
    });

    this.newsService.getNewsWithId(this.newsId);
    
    //console.log(this.news);
   
  }

  checkSource() {
    if (this.sourceName === "Local"){
      return true;
    }
    return false;
  }

  onDelete() {
    console.log('delete');
    console.log(this.newsId);
  }
}
