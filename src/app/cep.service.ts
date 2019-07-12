import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    CepService
  ]
})
export class CepService {
  private http: Http;

  private baseURL = "https://viacep.com.br/ws/";
  private format = "/json/";

  public getAddressByCep(cep: number){
    return this.http.get(this.baseURL + cep + this.format);
  }

  constructor() { }
}