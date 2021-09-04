import { Routes } from "@angular/router";
import { ReposListComponent } from "./repos/containers/repos-list/repos-list.component";
import { RepoComponent } from "./repos/containers/repo/repo.component";

export const routes: Routes = [
    { path: '', component: ReposListComponent },
    { path: 'repo', component: RepoComponent }
  ];
