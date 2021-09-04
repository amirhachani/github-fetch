import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposListComponent } from './containers/repos-list/repos-list.component';
import { RepoComponent } from './containers/repo/repo.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { repoReducer } from './reducers/repos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReposEffects } from './effects/repos.effect';

@NgModule({
  declarations: [ReposListComponent, RepoComponent],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('repositories', repoReducer),
  ],
  providers: [],
  exports: [ReposListComponent, RepoComponent],
})

export class ReposModule {}
