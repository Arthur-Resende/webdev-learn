import { Routes } from '@angular/router';
import { IndexPageComponent } from './app/index-page/index-page.component';
import { ArticleComponent } from './app/article/article.component';

export const AppRoutes: Routes = [
    {path: '', component: ArticleComponent}
];