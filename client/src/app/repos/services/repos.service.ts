import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReposService {
    constructor(private httpClient: HttpClient) {}

    getReposByUsername(username: string){
       return  this.httpClient
            .get(`http://localhost:3000/repos/${username}`)
    }

}
