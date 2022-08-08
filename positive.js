'use strict';
const negativeInput = document.getElementById('negative-word');
const positiveButton = document.getElementById('positive-button');

negativeInput.onkeydown = event => {
    if(event.key === 'Enter'){
        positiveButton.onclick();
    }
}//エンターキーを押しても実行できるように

positiveButton.onclick = () => {
    const negativeWord = negativeInput.value;
    if (negativeWord.length === 0) {
        return;
    }
    negativeMakeOver();
};//何も入力されない場合は実行しない。単語が入力された場合は関数negativeMakeOver();を実行する。

function negativeMakeOver(){
    const negativeEncoded = negativeInput.value;
    window.open(`https://thesaurus.weblio.jp/antonym/content/${encodeURIComponent(negativeEncoded)}`);
}//encodeURIComponent()で、入力された単語をパーセントエンコーディングし、それをURLの後ろに付け足す。何度も違う単語で試せるよう、別タブで開くようにした。
