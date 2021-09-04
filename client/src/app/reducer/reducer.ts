import { ActionReducerMap } from "@ngrx/store";
import { repoReducer } from "../repos/reducers/repos.reducer";

export const reducers : ActionReducerMap<any> = {
    repos : repoReducer 
}