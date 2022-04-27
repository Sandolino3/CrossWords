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
      document.querySelector('.level-complete').style.display='inline'
    }
  }else{
    answerField.style.borderColor = 'red'

  }

}

function getWord(){
  if (currentAns === ``) {
    alert('Please select field!')
  return
  }
  correctAnswer(currentAns,curentId)
  answerCounter++
  if (answerCounter >= 8) {
    document.querySelector('.level-complete').style.display='inline'
  }
}

export{submitFunc,answer,getWord}