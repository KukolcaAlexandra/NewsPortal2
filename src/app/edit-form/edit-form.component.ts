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
  //title: string;
  //newsForm: FormGroup;
  publicationDate: Date;
  
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
    console.log('edit');
    console.log(this.newsId);
    if (this.newsId) {
      alert('INIT EDIT');
      this.news = this.newsService.currentNews;
      //this.title = this.news && this.news.title; 
      //alert(this.news.date);
      this.newsForm.controls.heading.setValue(this.news && this.news.title);
      this.newsForm.controls.content.setValue(this.news && this.news.text);
      this.publicationDate = this.news && new Date(this.news.date);
      console.log(this.publicationDate);
      this.newsForm.controls.date.setValue(this.publicationDate);
      //this.newsForm.controls.date.setValue(this.publicationDate);
      //this.newsForm.controls.date.setValue(this.news && this.news.date);
      this.newsForm.controls.author.setValue(this.news && this.news.author);

      this.newsService.updatedCurrentNews.subscribe((news: any) => {
        console.log('UPDATE in edit form component');
        console.log(news);
        this.news = news;
        //this.title = news && news.title;
        //this.title = this.news.title;
        this.newsForm.controls.heading.setValue(this.news.title);
        this.newsForm.controls.content.setValue(this.news.text);
        //this.newsForm.controls.date.setValue(this.news.date);
        //this.newsForm.controls.date.setValue(this.news.date);
        this.publicationDate = this.news.date ? new Date(this.news.date) : null;
        this.newsForm.controls.date.setValue(this.publicationDate);

        this.newsForm.controls.author.setValue(this.news.author);
        //this.description = news && (news.description || news.text || '');
        //this.author = news && news.author;
        //this.date = news && (news.date || news.publishedAt);
        //this.url = news && news.urlToImage;
      });
    } else {
      this.publicationDate = new Date();
    }

    console.log(this.news);
   
  }

  save() {
    console.log('save');
    console.log(this.newsForm.controls.date);
    console.log(this.publicationDate);
    const news: INews = {
      //_id: this.newsId,
      //id: this.news.id,
      title: this.newsForm.controls.heading.value,
      text: this.newsForm.controls.content.value,
      date: new Date(this.newsForm.controls.date.value).toString(),//this.publicationDate.toString(), //this.newsForm.controls.date.value,
      author: this.newsForm.controls.author.value,
    }
    if (this.newsId) {
      news._id = this.newsId;
      news.id = this.news.id;
      this.newsService.updateNews(news);
    } else {
      this.newsService.addNews(news);
    }
    //console.log(this.newsId);
  }

  cancel() {
    console.log('cancel');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newsForm.value);
  }

}
