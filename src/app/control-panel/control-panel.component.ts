import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { ISource, SOURCES } from '../mock-news-sources';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Output() selectedSource = new EventEmitter<number>();
  @Output() localSource = new EventEmitter<boolean>();
  @Output() filterNews = new EventEmitter<string[]>();
  
  //sources: ISource[] = SOURCES;
  
  /*form = new FormGroup({
    comboBox: new FormControl({disabled: true}),
  });*/

  
  constructor(private newsService: NewsService) { }

  /*newsForm = new FormGroup({
    heading: new FormControl(''),
    comboBox: new FormControl({disabled: true}),
    inputKeyWord: new FormControl(''),
    checkMyNews: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
  });*/
  heading = new FormControl('');
  comboBox = new FormControl({disabled: true});
  inputKeyWord = new FormControl('');
  checkMyNews = new FormControl('');
  image = new FormControl('');
  date = new FormControl('');
  author = new FormControl('');
  sourceUrl = new FormControl('');

  ngOnInit() {
    //console.log(this.newsService.sources[0]);
    this.newsService.getSources();
  }

  onChange(selectedIndex: number) {
    //console.log(selectedIndex);
    //this.selectedSource.emit(selectedIndex);
    this.newsService.selectedSource = selectedIndex;
    //const source = this.newsService.sources[selectedIndex].id;
    //console.log(source);
    this.newsService.getNews(/*source*/);
    //this.newsService.selectedSource = selectedIndex;
  }

  handleEvent(sourceId: number) {
    this.selectedSource.emit(sourceId);
  }

  onCheck(checked: boolean) {
    this.localSource.emit(checked);
  }

  onFilterClick() {
    console.log('filter');
    console.log(this.inputKeyWord.value);
    //const key: string[] = this.inputKeyWord.value.split(' ').join('');
    //console.log(key);
    const keywordsWithSpaces: string[] = this.inputKeyWord.value.split(' ');
    const keywords = keywordsWithSpaces.filter(value => {
      console.log(value);
      if (value.length)
        return true;
      return false;
    })
    console.log(`key = ${keywords}`);
    console.log(keywords);
    this.filterNews.emit(keywords);
  }

  onCheckMyNews(checked: boolean) {
    this.localSource.emit(checked);
    //this.newsService.getLocalNews();
    this.newsService.onCheckMyNews(checked);
    if (checked) {
      this.comboBox.disable();
      //this.newsService.
      //this.newsService.getLocalNews();
    } else {
      this.comboBox.enable();
      //this.newsService.getNews();
    }
  }
}
