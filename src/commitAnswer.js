export function correctAnswer(answer,id){
    let i = 0
    document.querySelectorAll('input').forEach(el=>{
    if (el.id === id || Array.from(el.classList).includes(id)) {
           el.value = answer[i] 
           i++
    }})
}