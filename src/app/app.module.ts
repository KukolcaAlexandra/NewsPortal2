import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FullNewsComponent } from './full-news/full-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { KeywordsFilterPipe } from './keywords-filter.pipe';

const AppRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
  {path: 'add', component: EditNewsComponent},
  {path: 'edit/:id', component: EditNewsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    NewsListComponent,
    NewsComponent,
    NewsDetailsComponent,
    MainComponent,
    FullNewsComponent,
    EditNewsComponent,
    EditFormComponent,
    HeaderComponent,
    KeywordsFilterPipe,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
