import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {
  title:String='CaelumPic'
  fotos:Object[]
  
    constructor(servico:FotoService){
      servico.listar()
          .subscribe(resposta => this.fotos=resposta.json()
                    ,erro => console.log(erro) 
          )
    }

}
