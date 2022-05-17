import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_ADDRESS = environment.devURL;

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  // THE METHODS BELLOW ARE TEMPORARY ARTIFACTS TO TEST THE API
  getBeneficiaries() {
    return this.http.get(`${API_ADDRESS}/beneficiaries`);
  }

}
