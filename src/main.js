import { submitFunc } from "./isEqual.js"
import { selectRow } from "./selection.js"

let squeares = document.querySelectorAll('input')


document.getElementById('subm-form').addEventListener('submit',submitFunc)

squeares.forEach(el=>{
    el.addEventListener('click', selectRow)
})



