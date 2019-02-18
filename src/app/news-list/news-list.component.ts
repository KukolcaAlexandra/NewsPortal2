import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() loadNews = new EventEmitter<void>();

  showList = true;
  constructor(private newsService: NewsService) { }

  ngOnInit() {}

  onLoadClick() {
    this.loadNews.emit();
  }
}
