import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  @Input() news: INews;
  @Input() source: string;
  @Input() index: number;
  id: any;
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log('news desc');
    console.log(this.news);
    /*this.newsService.updatedCurrentNews.subscribe((news: any) => {
      console.log('UPDATE in news component');
      console.log(news);
      this.news = news;
      //this.title = news && news.title;
      //this.description = news && (news.description || news.text || '');
      //this.author = news && news.author;
      //this.date = news && (news.date || news.publishedAt);
      //this.url = news && news.urlToImage;
    });*/

    //console.log(this.index);
    if (this.news._id) {
      this.id = this.news._id;
    } else {
      this.id = this.index; 
    }
    console.log(this.id);
    //console.log(this.);
  }

  checkSource() {
    if (this.source === "Local"){
      return true;
    }
    return false;
  }

  editNews() {
    console.log('edit news');
    console.log(this.id);
    this.newsService.getNewsWithId(this.id);
  }

  deleteNews(news: INews) {
    console.log('delete news');
    console.log(this.id);
    this.newsService.deleteNews(this.id);
  }
}
