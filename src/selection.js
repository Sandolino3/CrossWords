import { answer } from "./isEqual.js";
import { getById } from "./util/data.js";

export async function selectRow(e){
    let boxElements = document.querySelectorAll('input')
    let AllElementsId = e.currentTarget.id
    let questionField = document.getElementById('question-field')

    let data = await getById(AllElementsId)
    questionField.value = data.question

    document.getElementById("answer-field").focus();


    Array.from(boxElements).map(el=>el.classList.remove('selected'));

    answer(AllElementsId)
    
    boxElements.forEach(el=>{
   
        if (el.id === AllElementsId || Array.from(el.classList).includes(AllElementsId)) {
            el.classList.add('selected')
        }
    })

}