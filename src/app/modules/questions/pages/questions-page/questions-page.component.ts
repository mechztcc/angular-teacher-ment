import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
})
export class QuestionsPageComponent {
  questions = [
    { title: 'Quanto é 2 x 2', type: 1, topic: 'Matemática' },
    {
      title: `Leia o trecho a seguir e responda à pergunta:

    "O protagonista da história é um homem comum, alguém que poderia ser seu vizinho ou colega de trabalho. Ele enfrenta dilemas e desafios que muitas pessoas enfrentam em suas vidas. No entanto, é sua capacidade de superar esses obstáculos e aprender com suas experiências que o torna um personagem inspirador."
    
    Pergunta: De acordo com o trecho, por que o protagonista da história é considerado inspirador?`,
      type: 2,
      topic: 'Matemática',
    },
    {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo ac turpis tristique, sed condimentum libero venenatis. Aenean quis velit et purus mattis congue. Vestibulum ac purus in nisi hendrerit interdum.

    `,
      type: 3,
      topic: 'Matemática',
    },
    {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo ac turpis tristique, sed condimentum libero venenatis. Aenean quis velit et purus mattis congue. Vestibulum ac purus in nisi hendrerit interdum.

    `,
      type: 2,
      topic: 'Matemática',
    },
    {
      title: ` Aenean quis velit et purus mattis congue. Vestibulum ac purus in nisi hendrerit interdum.`,
      type: 2,
      topic: 'Matemática',
    },
    { title: 'Quanto é 2 x 2', type: 1, topic: 'Matemática' },
  ];
}
