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
  //providers: [NewsService]
})

export class MainComponent implements OnInit {

  title = 'newsPortal';
  //sources: ISource[];
  currentSource: ISource;
  sourceName: string = initialSourceName;
  news: INews[][];
  currentNews: INews[];
  localSource: INews[];
  currentIndex: number;
  showLoadButton: boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    //this.sources = SOURCES;
    //this.newsService.getSources();
    this.newsService.updatedNews.subscribe((news: any) => {
      this.currentNews = news;
    });
    this.newsService.updatedSourceName.subscribe((sourceName: string) => {
      this.sourceName = sourceName;
      if (sourceName === localSourceName || sourceName === initialSourceName) {
        this.showLoadButton = false;
      } else {
        this.showLoadButton = true;
      }
    });
    //this.localSource = LOCAL_NEWS;
    //this.sourceName = 'Source Name'; 
    //this.news = NEWS;
  }

  //handleEvent(sourceIndex: number) {
    /*this.currentIndex = sourceIndex;
    //this.currentNews = this.news[this.currentIndex];
    //this.currentSource = this.sources[this.currentIndex];
    this.currentSource = this.newsService.sources[this.currentIndex];
    //this.currentNews = this.newsService.articles;
    this.sourceName = this.currentSource.name;*/
    //this.showLoadButton = true;
  //}

  //onCheck(checked: boolean) {
    //console.log(this.currentIndex);
  //  if (checked) {
      /*this.sourceName = "Local";
      //this.currentNews = this.localSource;
      //this.currentNews = this.newsService.localNews*/
      //this.showLoadButton = false;
      
  //  } else {
  //    if (this.currentIndex >= 0) {
        /*console.log(this.currentIndex);
        this.currentNews = this.news[this.currentIndex];
        //this.currentSource = this.sources[this.currentIndex];
        this.currentSource = this.newsService.sources[this.currentIndex];
        this.sourceName = this.currentSource.name;*/
        //this.showLoadButton = true;
//      } else {
        /*this.sourceName = "Source Name";
        this.currentNews = [];*/
        //this.showLoadButton = false;
//      }
//    }
//    console.log(`showLoadButton = ${this.showLoadButton}`);
//  }
}
