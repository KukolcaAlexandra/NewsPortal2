import { Component, OnInit, Input, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../news.service';
import { INews } from '../interfaces/news';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Input() newsId: string;
  news: INews;
  constructor(private newsService: NewsService) { }
  publicationDate: Date;
  dataString: string;

  newsForm = new FormGroup({
    heading: new FormControl('', [Validators.required]),
    shortDescription: new FormControl(''),
    content: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    sourceUrl: new FormControl(''),
  });

  ngOnInit() {
    if (this.newsId) {
      this.news = this.newsService.currentNews;
      this.newsForm.controls.heading.setValue(this.news && this.news.title);
      this.newsForm.controls.content.setValue(this.news && this.news.text);
      this.publicationDate = this.news && this.news.date ? new Date(this.news.date) : null;
      this.newsForm.controls.author.setValue(this.news && this.news.author);

      this.newsService.updatedCurrentNews.subscribe((news: any) => {
        this.newsForm.controls.heading.setValue(news.title);
        this.newsForm.controls.content.setValue(news.text);
        this.publicationDate = news.date ? new Date(news.date) : null;
        this.newsForm.controls.author.setValue(news.author);
      });
    } else {
      this.publicationDate = new Date();
      this.newsForm.controls.date.setValue(this.publicationDate);
    }
  }

  save() {
    const news: INews = {
      title: this.newsForm.controls.heading.value,
      text: this.newsForm.controls.content.value,
      date: new Date(this.newsForm.controls.date.value).toString(),
      author: this.newsForm.controls.author.value,
    };
    if (this.newsId) {
      news._id = this.newsId;
      news.id = this.news.id;
      this.newsService.updateNews(news);
    } else {
      this.newsService.addNews(news);
    }
  }

  cancel() {
    console.log('cancel');
  }

  onSubmit() {
    console.log('submit');
  }

}
