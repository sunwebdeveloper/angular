import { Component } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from 'app/foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {
  title:String='CaelumPic'
  fotos:Object[]
  
    constructor(private servico:FotoService){
      servico.listar()
          .subscribe(resposta => this.fotos=resposta.json()
                    ,erro => console.log(erro) 
          )
    }

    remover(foto:FotoComponent){
      this.servico.deletar(foto)
                  .subscribe(
                    resposta => console.log(`A foto ${foto.titulo} foi deletada com sucesso.`)
                    , erro => console.log(`Erro ao deletar a foto ${foto._id}`)
                  )
    }
}
