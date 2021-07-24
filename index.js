const summarize=[
//1問目
{ question:"私の歳はいくつでしょう？",
  answers:[
    20,
    21,
    22,
    23
  ],
  correct:23},
//2問目
  { question:"好きな食べ物は何でしょう？",
  answers:[
    "ハンバーグ",
    "イチゴパフェ",
    "堅あげポテト",
    "小籠包"
  ],
  correct:"ハンバーグ"},
//3問目
  { question:"現在何を勉強しているでしょう？",
  answers:[
    "JavaScript",
    "AWS",
    "jQuery",
    "React"
  ],
  correct: "JavaScript"},
//4問目
  { question:"どんな異性が好きでしょうか？",
  answers:[
    "堀北真希のようなとても可愛い方",
    "目標に向かって頑張っている方",
    "可愛くはないけど美容意識が高い方",
    "マザーテレサのような母性溢れる方"
  ],
  correct: "目標に向かって頑張っている方"}
];

//問題の数を取得・問題数を変数で指定

const summarizeLength=summarize.length;
let summarizeIndex=0;
let score=0;


// 回答１と用意したanswerが一致するようにする。(リファクタリングさせる)
// $choice[0].textContent=answers[0];
// $choice[1].textContent=answers[1];
// $choice[2].textContent=answers[2];
// $choice[3].textContent=answers[3];



//質問の内容を指定した内容に移す。

//htmlから取得してボタンの選択肢を定数で置き換える処理
const $choice=document.getElementsByTagName(`button`);
$choiceLength=$choice.length;

//クイズの選択肢を順番に取得する。
const Quiz=()=>{
  document.getElementById(`js-question`).textContent=summarize[summarizeIndex].question;
  
  for(let $choiceIndex=0;$choiceIndex<$choiceLength;$choiceIndex++){
    
    //選択肢の数を変数で置き換える
    
    //ここで上の4文を短くリファクタリングする
    $choice[$choiceIndex].textContent=summarize[summarizeIndex] .answers[$choiceIndex];
  }
}  
Quiz();



//正解、不正解のロジック作り
const process=(e)=>{
  if(summarize[summarizeIndex].correct===e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

  summarizeIndex++;

  if(summarizeIndex<summarizeLength){
    Quiz();
  }else{
    window.alert("終了！あなたの正解数は"+score+"/"+ summarizeLength+ "でした！");
  }
};

for(let processIndex=0;processIndex<$choiceLength;processIndex++){

  //正解不正解を選択肢全文にfor文を振っていく。
  $choice[processIndex].addEventListener(`click`,(e)=>{
    process(e);
    })
}

// $choice[0].addEventListener(`click`,(e)=>{
// process(e);
// })

// $choice[1].addEventListener(`click`,(e)=>{
//   process(e);
// })

// $choice[2].addEventListener(`click`,(e)=>{
//   process(e);
// })

// $choice[3].addEventListener(`click`,(e)=>{
//   process(e);
// })

