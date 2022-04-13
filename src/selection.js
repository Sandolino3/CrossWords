import { wordsData } from "./words.js";
import { answer } from "./isEqual.js";
export function selectRow(e){
    let boxElements = e.currentTarget.parentNode.querySelectorAll('input')
    if (boxElements.length >1) {
       
   
    let AllElements = e.currentTarget.parentNode.parentNode
    Array.from(AllElements.querySelectorAll('input')).map(el=>el.classList.remove('selected'));
    
    let firstCross = document.getElementById('first-cross')
    let secondCross = document.getElementById('second-cross')
    let thirtCross = document.getElementById('third-cross')
    let forthCross = document.getElementById('forth-cross')
    let fiftCross = document.getElementById('fift-cross')
    let questionField = document.getElementById('question-field')
    questionField.value=''
   
        let el = e.currentTarget.parentNode
        switch (el.id) {
            case'first-word':
            questionField.value=wordsData.words.firstWord.question
            answer(wordsData.words.firstWord.word,'first-word')
            break;
            case'second-word':
            questionField.value=wordsData.words.secondWord.question
            answer(wordsData.words.secondWord.word,'second-word')
            firstCross.classList.add('selected')
            fiftCross.classList.add('selected')
            break;
            case'third-word':
            questionField.value=wordsData.words.thirdWord.question
            answer (wordsData.words.thirdWord.word,'third-word')
            thirtCross.classList.add('selected')
            forthCross.classList.add('selected')
            break;
            case'forth-word':
            questionField.value=wordsData.words.forthWord.question
            answer (wordsData.words.forthWord.word,'forth-word')
            secondCross.classList.add('selected')
            break;
            case'fift-word':
            questionField.value=wordsData.words.fifthWord.question
            answer (wordsData.words.fifthWord.word,'fift-word')
            break;
        }
        Array.from(boxElements).map(el=> el.classList.add('selected'))
       
    }
    }