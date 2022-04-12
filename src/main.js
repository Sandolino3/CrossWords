let squeares = document.querySelectorAll('input')



squeares.forEach(el=>{
    el.addEventListener('click', selectRow)
})

function selectRow(e){
let firstCross = document.getElementById('first-cross')
let secondCross = document.getElementById('second-cross')
let thirtCross = document.getElementById('third-cross')
let forthCross = document.getElementById('forth-cross')
let fiftCross = document.getElementById('fift-cross')
    let el = e.currentTarget.parentNode
    switch (el.id) {
        case'second-word':
        firstCross.classList.add('select-single')
        fiftCross.classList.add('select-single')
        break;
        case'forth-word':
        secondCross.classList.add('select-single')
        break;
        case'third-word':
        thirtCross.classList.add('select-single')
        forthCross.classList.add('select-single')
        break;
    

    }
    e.currentTarget.parentNode.classList.add('selected')
}