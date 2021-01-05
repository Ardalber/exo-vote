import Question from './Question';
import React, { Component } from 'react';

class App extends Component {
  state = {
    questions: [
      {
        id:1,
        title: "Who let's the dog out?",
        answers: [
          {number:1, name: "Yes", count: 12},
          {number:2, name: "No", count: 7},
          {number:3, name: "OSEF", count: 23},
        ]
      },
      {
        id:2,
        title: "Tu veux voir mon beats?",
        answers: [
          {number:1, name: "Vrai", count: 12},
          {number:2, name: "Faux", count: 21}
        ]
      }, 
      {
        id:3,
        title: "Quel est l'âge du capitaine?",
        answers: [
          {number:1,name: "A", count: 9},
          {number:2, name: "B", count:11},
          {number:3, name: "C", count: 72},
          {number:4, name: "D", count: 5}
        ]
      }
    ]
  }

  render() {
    /*
    this.state.questions
    [
      {id:1,title: "Who let's the dog out?"},
      {id:2,title: "Tu veux voir mon beats?"}, 
      {id:3,title: "Quel est l'âge du capitaine?"}
    ]
    */

   const questionsJSX = this.state.questions.map(question => {
    return <Question key={question.id} data={question} />
  })

    /*
      questionsJSX
      Pour chaque élément dans ton tableau this.state.questions



      questionsJSX = []

      1er élément du tableau this.state.questions 
      {id:1,title: "Who let's the dog out?"}

      retourner <Question quelque chose/>
      questionsJSX = [
        <Question key=1 data={id:1,title: "Who let's the dog out?"}  />
      ]

      2ème élément du tbaleau this.state.questions
      retourner un <Question quelquechose /> mais cette fois avec les données
      du 2ème élément
      {id:2,title: "Tu veux voir mon beats?"},
      <Question key=2 data={id:2,title: "Tu veux voir mon beats?"} />
      Puis après il va le mettre dans questionsJSX

          questionsJSX = [
        <Question key=1 data={id:1,title: "Who let's the dog out?"}  />,
        <Question key=2 data={id:2,title: "Tu veux voir mon beats?"} />
      ]
      

      3ème et dernier élément
      {id:3,title: "Quel est l'âge du capitaine?"}
      Il va retourner à la place un <Question quelquechose/>
      <Question key=3 data={id:3,title: "Quel est l'âge du capitaine?"} />




    questionsJSX=
    [
      <Question key="1" data={id:1,title: "Who let's the dog out?"}  />,
      <Question key="2" data={id:2,title: "Tu veux voir mon beats?"} />,
      <Question key="3" data={id:3,title: "Quel est l'âge du capitaine?"} />
    ]
    */

    return (
      <div className="App container">
        {questionsJSX}


      </div>
    );
  }
}

export default App;
