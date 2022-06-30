import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../,,/../../../environments/environment';
import { filter, map } from 'rxjs/operators';

const API_ADDRESS = environment.devURL;

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http : HttpClient) { }

  // THE METHODS BELLOW ARE TEMPORARY ARTIFACTS TO TEST THE API
  getUsers(searchPattrn : string) {
    return this.http.get(`${API_ADDRESS}/users`).pipe(
      map((users : any) => {
        return users.filter((user : any) => user.name.toLocaleLowerCase().match(searchPattrn) !== null);
      })
    );
  }  

}
