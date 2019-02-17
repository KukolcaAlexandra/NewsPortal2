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
  //currentNews: INews;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id'];
    this.newsService.updatedSourceName.subscribe((sourceName: string) => {
      this.sourceName = sourceName;
    });
    
    /*this.newsService.updatedCurrentNews.subscribe((news: any) => {
      this.currentNews = news;
    });*/

    this.sourceName = this.newsService.sourceName;
   // this.currentNews = this.currentNews;
    //this.newsService.getNewsWithId(this.newsId);
    /*if (this.sourceName === localSourceName) {
      console.log('local source');
      this.newsService.getNewsWithId(this.newsId);
    } else {
      this.currentNews = this.newsService.articles[this.newsId];
    }*/
    
    //console.log(this.newsId);
    //console.log(this.newsService);
    //console.log('this.sourceName' + this.sourceName);
  }

}
