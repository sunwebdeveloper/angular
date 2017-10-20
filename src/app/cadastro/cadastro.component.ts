import { Component } from '@angular/core';
import { FotoComponent } from 'app/foto/foto.component';
import { FotoService } from 'app/servicos/foto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent()
  mensagem:String
  formCadastro:FormGroup

  constructor(private servico:FotoService
             ,private rota:ActivatedRoute
             ,private roteador:Router
             ,private formBuilder:FormBuilder){
    
    this.formCadastro = formBuilder.group({
      titulo:['',Validators.required]
      ,url:['', Validators.required]
      ,descricao:''})   
    rota.params.subscribe(
       parametros => parametros.id && servico.obter(parametros.id)
                                                .subscribe(
                                                    resposta => this.foto = resposta.json() 
                                                    ,erro => console.log(erro)
                                                )
    )
  }

  salvar(submit:Event){
    submit.preventDefault();

    if(this.foto._id){
      this.servico.alterar(this.foto)
                  .subscribe(
                    () => {
                      this.mensagem = `Foto ${this.foto.titulo} alterada com sucesso.`;

                      setTimeout(
                        () => {
                          this.mensagem=''
                          this.roteador.navigate([''])
                        },4000
                      )
                    }
                    , erro => console.log(erro)
                  )
    } else {
      this.servico.cadastrar(this.foto)
                  .subscribe(
                    () => {
                      this.mensagem = `Foto ${this.foto.titulo} adicionada com sucesso.`;
                      this.foto = new FotoComponent()

                      setTimeout(
                        () => {
                          this.mensagem=''                          
                        },4000
                      )
                    }
                    , erro => console.log(erro)
                  )
    }
  }
}
