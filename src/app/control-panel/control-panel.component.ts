import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsService } from '../news.service';
import { ISource } from '../interfaces/news';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Output() filterNews = new EventEmitter<string[]>();
  @Output() updateCount = new EventEmitter<void>();
  sources: ISource[];
  constructor(private newsService: NewsService) { }

  heading = new FormControl('');
  comboBox = new FormControl({disabled: true});
  inputKeyWord = new FormControl('');
  checkMyNews = new FormControl('');
  image = new FormControl('');
  date = new FormControl('');
  author = new FormControl('');
  sourceUrl = new FormControl('');

  ngOnInit() {
    this.newsService.getSources();
    this.sources = this.newsService.sources;
    this.newsService.updatedSources.subscribe((sources: any) => {
      this.sources = sources;
    });
  }

  onChange(selectedIndex: number) {
    this.newsService.selectedSource = selectedIndex;
    this.newsService.getNews();
    this.updateCount.emit();
  }

  onFilterClick() {
    const keywordsWithSpaces: string[] = this.inputKeyWord.value.split(' ');
    const keywords = keywordsWithSpaces.filter(value => {
      if (value.length) {
        return true;
      }
      return false;
    });
    this.filterNews.emit(keywords);
  }

  onCheckMyNews(checked: boolean) {
    this.newsService.onCheckMyNews(checked);
    if (checked) {
      this.comboBox.disable();
      this.updateCount.emit();
    } else {
      this.comboBox.enable();
    }
  }
}
