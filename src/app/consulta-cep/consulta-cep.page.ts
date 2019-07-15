import { Component, OnInit } from '@angular/core';
import { CepService } from '../api/cep.service';
import { IAddress } from '../model/address';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.page.html',
  styleUrls: ['./consulta-cep.page.scss'],
})
export class ConsultaCepPage implements OnInit {
  constructor(private _seviceCEP : CepService) { }

  public cep: number;
  private address : IAddress;

  getCep(){
    this._seviceCEP.getAddressByCep(this.cep).subscribe(data => this.address = data);
  }

  ngOnInit() { }
}