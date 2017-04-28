import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    private tarefas: any[];
    private task: any;

    constructor(public navCtrl: NavController, public toast: ToastController) {
        this.task = {tarefa: "", descricao: ""};
        this.tarefas = [];
    }


    add() {
        if (this.task.tarefa.trim() == "")
            return this.showToast("Preencha o campo tarefa para continuar!", 3000);

        if (this.task.descricao.trim() == "")
            return this.showToast("Preencha o campo descrição para continuar!", 3000);
        this.tarefas.push({tarefa: this.task.tarefa, descricao: this.task.descricao})
        this.showToast("Registro Salvo com sucesso!", 3000);
        this.limparTarefa();
    }

    limparTarefa() {
        this.task.tarefa = "";
        this.task.descricao = "";
    }

    remover(indice) {
        this.tarefas.splice(indice, 1);
    }

    removerTodos() {
        this.tarefas = [];
    }

    showToast(message: string, duration: number) {
        return this.toast.create({
            message: message,
            duration: duration,
            closeButtonText: "Ok",
            showCloseButton: true,
            position: "top"
        }).present();
    }

}
