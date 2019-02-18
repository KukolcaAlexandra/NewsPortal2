import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NewsService } from '../news.service';
import { localSourceName } from '../const';

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
  publishedDate: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    if (this.news._id) {
      this.id = this.news._id;
    } else {
      this.id = this.index;
    }
    this.publishedDate = this.news.publishedAt || this.news.date;
  }

  checkSource() {
    if (this.source === localSourceName) {
      return true;
    }
    return false;
  }

  editNews() {
    this.newsService.getNewsWithId(this.id);
  }

  deleteNews() {
    this.newsService.deleteNews(this.id);
  }
}
