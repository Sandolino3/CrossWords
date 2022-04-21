import { wordsData } from "./words.js";
import { answer } from "./isEqual.js";

export function selectRow(e){
    let boxElements = document.querySelectorAll('input')
    let AllElementsId = e.currentTarget.id
    let questionField = document.getElementById('question-field')
    questionField.value = wordsData.words[AllElementsId].question

    Array.from(boxElements).map(el=>el.classList.remove('selected'));

    answer(wordsData.words[AllElementsId].word,AllElementsId)
    boxElements.forEach(el=>{
   
        if (el.id === AllElementsId || Array.from(el.classList).includes(AllElementsId)) {
            el.classList.add('selected')
        }
    })

}