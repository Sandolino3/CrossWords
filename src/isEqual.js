import { correctAnswer } from "./commitAnswer.js"

let currentAns = ''
let curentId = ''

function answer(ans,id){
    currentAns = ans
    curentId = id
}

function submitFunc(e){
e.preventDefault()
  let formData = new FormData(e.currentTarget)
  let answerField = document.getElementById('answer-field')
  let answer = formData.get('answer')
  if (answer === currentAns) {

    correctAnswer(answer,curentId)
    answerField.style.borderColor = 'greenyellow'

    answerField.value = ''
  }else{
    answerField.style.borderColor = 'red'

  }

}

export{submitFunc,answer}