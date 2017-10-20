import { Pipe } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name:'filtroPorTitulo'
})
export class FiltroPorTitulo {

    transform(fotos: FotoComponent[], inputBusca:string){
        return fotos.filter(foto => {
            return foto.titulo
                .toLowerCase()
                .includes(inputBusca.toLowerCase())
        })
    }
}