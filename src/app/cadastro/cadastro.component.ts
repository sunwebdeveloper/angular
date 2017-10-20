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
                  () => {
                    alert(`Foto ${this.foto.titulo} adicionada com sucesso.`)
                    this.foto = new FotoComponent();
                  }
                  , erro => console.log(erro)
    )
  }
}
