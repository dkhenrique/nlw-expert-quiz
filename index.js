const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de estilos",
      "Uma linguagem de programação de scripts",
      "Uma linguagem de programação de dados",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variable myVar;",
      "variável myVar;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()'?",
    respostas: [
      "Selecionar elementos por sua classe",
      "Selecionar elementos por seu ID",
      "Selecionar elementos por sua tag",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "=",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Uma biblioteca JavaScript popular",
      "A representação da estrutura de uma página HTML",
      "Uma função de manipulação de strings",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método usado para imprimir mensagens no console em JavaScript?",
    respostas: [
      "console.log()",
      "print()",
      "log()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de dado retornado pela função typeof em JavaScript?",
    respostas: [
      "String",
      "Number",
      "Object",
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função anônima em JavaScript?",
    respostas: [
      "Uma função sem nome",
      "Uma função com um nome não convencional",
      "Uma função que não pode ser invocada",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i < 5; i++)",
      "for (i = 0; i < 5)",
      "para (i = 0; i < 5; i++)",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma variável global em JavaScript?",
    respostas: [
      "Uma variável que pode ser acessada de qualquer lugar no código",
      "Uma variável declarada dentro de uma função",
      "Uma variável que só pode ser acessada por funções específicas",
    ],
    correta: 0
  },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

    }
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}