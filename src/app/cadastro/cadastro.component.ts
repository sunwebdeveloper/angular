import { Component } from '@angular/core';
import { FotoComponent } from 'app/foto/foto.component';
import { FotoService } from 'app/servicos/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent();

  constructor(private servico:FotoService){}

  salvar(submit:Event){
    console.log(this.foto);
    submit.preventDefault();

    this.servico.cadastrar(this.foto)
                .subscribe(
                  resposta => console.log(resposta)
                  , erro => console.log(erro)
    )
  }
}
