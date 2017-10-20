import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { FotoComponent } from "app/foto/foto.component";
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    private cabecalho:Headers;
    private url:string;

    constructor(private caelumPicApi:Http) {
        this.cabecalho = new Headers();
        this.cabecalho.append('Content-Type','application/json')

        this.url='http://localhost:3000/v1/fotos/'
    }

    listar() : Observable<Response>{
        return this.caelumPicApi.get(this.url)
    }

    cadastrar(foto:FotoComponent) : Observable<Response> {
        return this.caelumPicApi.post(
          this.url
          ,JSON.stringify(foto)
          ,{headers: this.cabecalho}  
        )
    }

    deletar(foto:FotoComponent) : Observable<Response> {
        return this.caelumPicApi.delete(
            this.url+foto._id
        )
    }

    alterar(foto:FotoComponent) : Observable<Response> {
        return this.caelumPicApi.put(
            this.url+foto._id,
            JSON.stringify(foto),
            {headers: this.cabecalho}
        )
    }
    
    obter(id) : Observable<Response> {
        return this.caelumPicApi.get(
            this.url+id
        )
    }
}