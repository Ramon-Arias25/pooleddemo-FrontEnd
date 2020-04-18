import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Publication } from '../models/publication';

@Injectable()
export class PublicationService{
    public url: string;

    constructor(
        private myHttp: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    addPublication(token, publication):Observable<any>{
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        
        return this.myHttp.post(this.url + 'publication', params, {headers: headers});
    }

    getPublication(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        
        return this.myHttp.get(this.url + 'publications/'+page, {headers: headers});
    }

    deletePublication(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        
        return this.myHttp.delete(this.url + 'publication/'+id, {headers: headers});
    }
}