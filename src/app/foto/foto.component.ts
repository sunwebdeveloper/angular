import {Component, Input} from '@angular/core'

@Component({
    selector:'foto',
    template:`<img src="{{url}}" [alt]="titulo" class="img-responsive center-block"/>`
})

export class FotoComponent{
             _id:string   
    @Input() url:String=''
    @Input() titulo:String=''
    @Input() descricao:String=''
}