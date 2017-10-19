import { Component } from '@angular/core';
import { FotoComponent } from 'app/foto/foto.component';
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent();
  caelumPicAPI:Http;

  constructor(http:Http){
    this.caelumPicAPI = http;
  }

  salvar(submit:Event){
    console.log(this.foto);
    submit.preventDefault();

    let cabecalho = new Headers()
    cabecalho.append('Content-Type','application/json')

    this.caelumPicAPI.post(
      'http://localhost:3000/v1/fotos'
      ,JSON.stringify(this.foto)
      ,{headers: cabecalho}  
    ).subscribe(
      resposta => console.log(resposta)
      , erro => console.log(erro)
    )
  }
}
