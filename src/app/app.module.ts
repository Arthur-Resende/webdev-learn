import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
