import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ArticleComponent } from './article/article.component';
import { ImportantHighlightComponent } from './important-highlight/important-highlight.component';

import { AppRoutes } from 'src/app.routes';
import { TriviaHighlightComponent } from './trivia-highlight/trivia-highlight.component';
import { CardComponent } from './card/card.component';
import { BlockCardComponent } from './block-card/block-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexPageComponent,
    ArticleComponent,
    ImportantHighlightComponent,
    TriviaHighlightComponent,
    CardComponent,
    BlockCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
