import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AddComponent } from './components/add.components/add.component';
import { MainComponent } from './components/main.components/main.component';
import { ReceivedComponent } from './components/receved/received.component';
import { SendedComponent } from './components/sended/sended.component';

const messagesRoutes: Routes =[
    {
        path: 'mensajes',
        component: MainComponent,
        children:[
            { path: '', redirectTo: 'recibidos', pathMatch: 'full' },
            { path: 'enviar', component:AddComponent },
            { path: 'enviados', component: SendedComponent},
            { path: 'recibidos', component: ReceivedComponent },
            { path: 'recibidos/:page?', component: ReceivedComponent },
            { path: 'enviados/:page?', component: SendedComponent}
        ]
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(messagesRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class MessagesRoutingModule{}