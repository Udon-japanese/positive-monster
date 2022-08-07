// if(18 = 81){
// location.replace("https://worddrow.net/searchReverse?keyword=%E5%AB%8C");
// }else{

// }


'use strict';
const negativeInput = document.getElementById('negative-word')
const positiveButton = document.getElementById('positive-button')

negativeInput.onkeydown = event => {
    if(event.key === 'Enter'){
        positiveButton.onclick();
    }
}

positiveButton.onclick = () => {
    const negativeWord = negativeInput.value;
    if (negativeWord.length === 0) {
        return;
    }
    console.log(negativeWord);
    negativeMakeOver()
};

function negativeMakeOver(){
    const negativeEncoded = negativeInput.value;
    window.open(`https://worddrow.net/searchReverse?keyword=${encodeURIComponent(negativeEncoded)}`)
}

