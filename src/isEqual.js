import { getById } from "./util/data.js"
import { correctAnswer } from "./commitAnswer.js"

let currentAns = ''
let curentId = ''
let answerCounter = 0

async function answer(id){
 let data = await getById(id)
 console.log();
    currentAns = data.word
    curentId = id
}

function submitFunc(e){
e.preventDefault()
  let formData = new FormData(e.currentTarget)
  let answerField = document.getElementById('answer-field')
  let answer = formData.get('answer')
  if (currentAns === ``) {
    alert('Please select field!')
  return
  }
  if (answer === currentAns) {
    correctAnswer(answer,curentId)
    answerField.style.borderColor = 'greenyellow'
    answerField.value = ''
    answerCounter++
    if (answerCounter >= 8) {
      alert('level complete')
      return
    }
  }else{
    answerField.style.borderColor = 'red'

  }

}

export{submitFunc,answer}