/*
誰が（要素・タグ）何を（要素の持つプロパティ）する（実行・変更）
p要素のid

*/

// document.getElementById("txt")

// .innerHTML = "eeeee<em>ssss</em>"

// console.log(document.getElementById("txt"));

const age = document.getElementById("age");
const txt = document.getElementById("txt");
document.getElementById("btn").addEventListener("click", () => {
  const num = Number(age.value);
  if( num < 0 || num >= 130 ){
    txt.innerText = "そんな年齢はありません";
  }
  else if( num >= 100 ){
    //#txtの文字を『長生きですね』に変更
    txt.innerText = "長生きですね";
  }
  else if( num >= 21 && num <= 99 ){
    txt.innerText = "大人ですね";
  }
  else if(num == 20){
    txt.innerText = "成人ですね";
  }
  else if( num >= 7 && num <= 12 ){
    txt.innerText = "小学生ですね";
  }
  else if( num >= 0 && num <= 6 ){
    txt.innerText = "子供ですね";
  }
  else if( num >= 13 && num <= 18 ){
    txt.innerText = "中高生ですね";
  }
  else{
    console.log("条件違う");
  }
})

/*
  0 -6 子供ですね
  7 - 12 小学生ですね
  13 - 18 中高生
  20 成人していますね
  21 - 99　大人
  100 - 長生き

  #ageに年齢入力
  #btnクリック
  #ageのvalueを比べる
  　=>もし0以上の時　かつ　６以下の時
  =>もし２０と同じ時
  =>もし１００以上の時

  if( 条件 ){
    条件が真　　（）　の時
  }

*/
