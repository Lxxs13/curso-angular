import { NgModule } from "@angular/core";
import { contadorComponenet } from './contador/contador.component';

@NgModule({
    declarations:[
        contadorComponenet
    ],
    exports:[
        contadorComponenet
    ]
})
export class ContadorModule{

}