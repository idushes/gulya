import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
