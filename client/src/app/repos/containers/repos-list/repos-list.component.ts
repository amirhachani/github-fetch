import { Component, OnInit } from '@angular/core';
import { FetchUserRepos } from '../../actions/repos.action';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/repos.reducer';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css'],
})
export class ReposListComponent implements OnInit {
  public username: string = '';
  constructor(private store: Store) {}
  
  ngOnInit(): void {
  }
  
  public repos$ =  this.store.select((state: any) => state.repositories.repos);
  public loading$ =  this.store.select((state: any) => state.repositories.loading);
  public result: [] = []
   
  onClick(username: string): void {
    if (!this.username) {
      alert ('Please type in a username');
    } else {
      this.store.dispatch(FetchUserRepos({ username }));
    }
  }
}
