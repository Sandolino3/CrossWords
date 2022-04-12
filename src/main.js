let squeares = document.querySelectorAll('input')



squeares.forEach(el=>{
    el.addEventListener('click', selectRow)
})

function selectRow(e){
let boxElements = e.currentTarget.parentNode.querySelectorAll('input')
let AllElements = e.currentTarget.parentNode.parentNode
Array.from(AllElements.querySelectorAll('input')).map(el=>el.classList.remove('selected'));

let firstCross = document.getElementById('first-cross')
let secondCross = document.getElementById('second-cross')
let thirtCross = document.getElementById('third-cross')
let forthCross = document.getElementById('forth-cross')
let fiftCross = document.getElementById('fift-cross')
    let el = e.currentTarget.parentNode
    switch (el.id) {
        case'second-word':
        firstCross.classList.add('selected')
        fiftCross.classList.add('selected')
        break;
        case'forth-word':
        secondCross.classList.add('selected')
        break;
        case'third-word':
        thirtCross.classList.add('selected')
        forthCross.classList.add('selected')
        break;
    }
    Array.from(boxElements).map(el=> el.classList.add('selected'))
    // e.currentTarget.parentNode.classList.add('selected')
}