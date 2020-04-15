import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    providers: [UserService]
})
export class SidebarComponent implements OnInit{
    public identity;
    public token;
    public stats;
    public url;
    public status;
    public publication: Publication;

    constructor(
        private myUserService: UserService
    ){
         this.identity = this.myUserService.getIdentity();
         this.token = this.myUserService.getToken();
         this.stats = this.myUserService.getStats();
         this.url = GLOBAL.url;
         this.publication = new Publication (
             "",
             "",
             "",
             "",
             this.identity._id);
    }

    ngOnInit(){
        console.log('sidebar.component is load!');
    }

    onSubmit(){
        console.log(this.publication);
    }
}