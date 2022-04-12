let currentAns = ``

function answer(ans){
    currentAns = ans
}

function submitFunc(e){
e.preventDefault()
// console.log(ans);
  let formData = new FormData(e.currentTarget)
  let answer = formData.get('answer')
  if (answer === currentAns) {
      correcnAnswer()
  }else{
      console.log(`NO`);
  }

}

function correcnAnswer(){
    console.log(`YES`);
}

export{submitFunc,answer}