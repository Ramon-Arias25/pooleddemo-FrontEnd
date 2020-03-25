import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title: string;
  public identity;

  constructor(
    private myRoute: ActivatedRoute,
    private myRouter: Router,
    private myUserService:UserService
  ){
    this.title = 'Pooled Demo';
  }

  ngOnInit(){
    this.identity = this.myUserService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this.myUserService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.myRouter.navigate(['/']);
  }
}