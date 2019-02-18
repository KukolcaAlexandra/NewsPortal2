import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import { INews } from '../interfaces/news';
import { localSourceName } from '../const';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  public newsId: string;
  sourceName: string;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id'];
    this.newsService.updatedSourceName.subscribe((sourceName: string) => {
      this.sourceName = sourceName;
    });

    this.sourceName = this.newsService.sourceName;
  }

}
