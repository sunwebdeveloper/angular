import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FotoService } from './servicos/foto.service';

import { roteamento } from "./app.routes";
import { FiltroPorTitulo } from './foto/titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpModule,
    FormsModule,
    roteamento
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
