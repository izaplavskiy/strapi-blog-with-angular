import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from "./articles/articles.component";  
import { ArticleComponent } from "./article/article.component";
import { CategoryComponent } from "./category/category.component";


import { ApolloModule } from "apollo-angular";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";

import { MarkdownModule } from "ngx-markdown";



const appRoutes: Routes = [  
  { path: "", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    // AppRoutingModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
