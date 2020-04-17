import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    providers: [UserService, PublicationService]
})
export class SidebarComponent implements OnInit{
    public identity;
    public token;
    public stats;
    public url;
    public status;
    public publication: Publication;

    constructor(
        private myUserService: UserService,
        private myPublicationService: PublicationService
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

    onSubmit(form){
        //console.log(this.publication);
        this.myPublicationService.addPublication(this.token, this.publication).subscribe(
            response => {
                if(response.publication){
                    //this.publication = response.publication;
                    this.status = 'success';
                    form.reset();
                }else{
                    this.status = 'error';
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
                if(errorMessage != null){
                    this.status = 'error';
                }
            }
        );
    }
}