import { Component, OnInit } from '@angular/core';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
// import ARTICLE_QUERY from "../apollo/queries/article/article";
import { ActivatedRoute } from "@angular/router";  
import { Subscription } from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;

  private queryArticle: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryArticle = this.apollo
      .watchQuery({
        query: gql`  
          query Articles($id: ID!) {
            article(id: $id) {
              id
              title
              content
              image {
                url
              }
              category {
                id
                name
              }
              published_at
            }
          }
        `,
        variables: {
          id: this.route.snapshot.paramMap.get("id")
        }
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });

    }
    
    ngOnDestroy() {
      this.queryArticle.unsubscribe();
    }

}
