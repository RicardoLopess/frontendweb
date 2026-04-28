import { Component, signal } from '@angular/core';
import { Tarefa } from "./tarefa";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TODOapp');

  arrayDeTarefas = signal<Tarefa[]>([]);

  // URL do seu backend no Render
  apiURL = "https://apitarefaricardo257066bernardo152687fern.onrender.com";

  constructor(private http: HttpClient) {
    console.log("APP INICIOU");
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);

    this.http.post<Tarefa>(`${this.apiURL}/api/post`, novaTarefa)
      .subscribe(resultado => {
        console.log("CRIADO:", resultado);
        this.READ_tarefas();
      });
  }

  READ_tarefas() {
    console.log("CHAMANDO API...");

    this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`)
      .subscribe(
        resultado => {
          console.log("RESULTADO API:", resultado);
          this.arrayDeTarefas.set(resultado);
        },
        erro => {
          console.error("ERRO API:", erro);
        }
      );
  }

  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    var indice = this.arrayDeTarefas().indexOf(tarefaAserRemovida);
    var id = this.arrayDeTarefas()[indice]._id;

    this.http.delete(`${this.apiURL}/api/delete/${id}`)
      .subscribe(resultado => {
        console.log("DELETADO:", resultado);
        this.READ_tarefas();
      });
  }
}