import { Component, OnInit, HostBinding} from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;
  article : Article;
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
    this.article =  new Article('Angular 2','http://angular.io',10);
  }
voteUp():Boolean { //Aggiunto tipo di ritorno
    this.article.voteUp();
    return false; //Non propagare l'evento 
}
voteDown():Boolean{
    this.article.voteDown();
    return false; //Non propagare l'evento 
}

  ngOnInit() {}
}

