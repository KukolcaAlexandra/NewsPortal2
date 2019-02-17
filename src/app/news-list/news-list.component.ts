import { Component, OnInit, Input } from '@angular/core';
import { INews } from '../interfaces/news';
import { NEWS, ADD_NEWS } from '../mock-news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() newsList: INews[] = NEWS[0];
  @Input() source: string;
  @Input() showLoadButton: boolean;
  
  showList: boolean = true;
  constructor(private newsService: NewsService) { }

  ngOnInit() {}

  onLoadClick() {
    //this.newsList = [...this.newsList, ...ADD_NEWS];
    this.newsService.onLoadNews();
  }
}
