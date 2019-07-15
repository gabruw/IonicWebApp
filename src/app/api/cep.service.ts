import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../model/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "https://viacep.com.br/ws/";
  private format = "/json/";

  public getAddressByCep(cep: number): Observable<IAddress> {
    if(cep != null){
      if(cep.toString().length == 8){
        return this.httpClient.get<IAddress>(this.baseURL + cep + this.format);
      }else{
        alert("Falta caracteres no campo CEP.")
      }
    }else{
      alert("O campo CEP está vazio.")
    }
  }
}