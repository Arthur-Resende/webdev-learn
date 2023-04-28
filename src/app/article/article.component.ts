import { Component } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { BlogPage } from '../page';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  // defining loading page (I don't know how async communication works yet)
  loadingPage: BlogPage = {
    title: 'loading',
    sections: [{
        title: '',
        paragraphs: [{
          text: [],
          highlights: [{
            text: '',
            type: ''
          }]
        }]
    }]
  };

  // default page is the loading page
  page: BlogPage = this.loadingPage;

  constructor(
    private httpClient: HttpClientService
  ) {}

  ngOnInit() {
    // gets home_page.json as observable
    this.httpClient.getPage('home_page.json').subscribe((response) => {
      this.page = response;
    });
  }
}
