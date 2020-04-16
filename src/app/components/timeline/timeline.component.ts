 import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute, Params } from '@angular/router';
 import { Publication } from '../../models/publication';
 import { GLOBAL } from '../../services/global';
 import { UserService } from '../../services/user.service';

 @Component({
     selector: 'timeline',
     templateUrl: './timeline.component.html',
     providers: [UserService]
 })
 export class TimelineComponent implements OnInit{
    public title: string;
    public identity;
    public token;
    public url: string;

    constructor(
        private myRoute: ActivatedRoute,
        private myRouter: Router,
        private myUserService: UserService
    ){
        this.title = 'Timeline';
        this.identity = this.myUserService.getIdentity();
        this.token = this.myUserService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('TimeLine Component is load!');
    }
 }