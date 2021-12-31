// const bmi = calculateBmi(1.8,96);

// let message = 'わかりません';


// 条件分岐
// if (bmi < 18.5) {
// //痩せ　18.50未満
// message = '低体重です';
// }else if (bmi > 25.0) {
//     //肥満　25.00以上
//     message = '肥満です';
// }else {
//     //普通　18.50以上〜25.0未満
//     message = '普通です';
// }

// console.log(message);

// 関数
// function calculateBmi(height,weight) {
//        //BMI = 体重[kg] / (身長[m]) ** 2
//         return weight / height ** 2;          
// }

//イベントの設定
// function showAlert() {
    // alert('くりっくしました？');
// }
// document.querySelector('li').addEventListener('click', showAlert);

// 実装
const answerslist = document.querySelectorAll('ol.answers li');

answerslist.forEach(li => li.addEventListener('click',checkClickedAnswer));

//正解のオブジェクト
const correctAnswers = {
    question1: 'A',
    question2: 'B',
};
// correctAnswers['question1']//Bが入る

function checkClickedAnswer(event) {
    //クリックされた答えの要素(liタグ)
    const clickedAnswerElement = event.currentTarget
    // console.log(clickedAnswerElement.dataset.answer);

　　　//選択した答え(A,B,C,D)
   const selectedAnswer = clickedAnswerElement.dataset.answer;

   const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
   
   //正解(A,B,C,D)
   const correctAnswer = correctAnswers[questionId];

    //メッセージを入れる変数を用意
    let message;
    
    //カラーコードを入れる変数を用意
    let answerColorCode;

    //答えが正しいか判定
    if (selectedAnswer === correctAnswer) {
    //正解の場合
    　　 message = '正解！';  
    　　 answerColorCode = '';

    }else{
    //不正解の場合
    　　 message = '不正解！';  
    　　 answerColorCode = 'red';
    }

     alert(message);

     //答えの色を変更(不正解の場合)
        document.querySelector('span#correct-answer').style.color = answerColorCode;      
    //答えを全体表示
        document.querySelector('div#section-correct-answer').style.display = 'block';
}