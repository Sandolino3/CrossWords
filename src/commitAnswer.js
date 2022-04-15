export function correctAnswer(answer,id){
    
    let wordFealds = Array.from(document.querySelectorAll(`#${id} input`))
    let ansWord = answer.split("")

    let firstCross = document.getElementById('first-cross')
    let secondCross = document.getElementById('second-cross')
    let thirtCross = document.getElementById('third-cross')
    let forthCross = document.getElementById('forth-cross')
    let fiftCross = document.getElementById('fift-cross')

    switch (id) {
        case'first-word':
        for (let i = 0; i < ansWord.length; i++) {
            wordFealds[i].value = ansWord[i]
            
        }
        break;
        case'second-word':
        firstCross.value = ansWord[0]
        fiftCross.value = ansWord[6]
        ansWord.shift()
        ansWord.pop()
        for (let i = 0; i < ansWord.length; i++) {
            wordFealds[i].value = ansWord[i]  
        }
        break;
        case'third-word':
        thirtCross.value = ansWord[0]
        forthCross.value = ansWord[5]
        ansWord.shift()
        ansWord.pop()
        for (let i = 0; i < ansWord.length; i++) {
            wordFealds[i].value = ansWord[i]  
        }
        break;
        case'forth-word':
        secondCross.value = ansWord[0]
        ansWord.shift()

        for (let i = 0; i < ansWord.length; i++) {
            wordFealds[i].value = ansWord[i]  
        }
        break;
        case'fift-word':
        for (let i = 0; i < ansWord.length; i++) {
            wordFealds[i].value = ansWord[i]  
        }
        break;
    }
    // wordFealds[1].value = 'a'
    // for (let i = 0; i < ansWord.length; i++) {
    //     wordFealds[i].value = ansWord[i]
        
    // }

    // console.log(wordFealds);
}