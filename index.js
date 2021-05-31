readLineSync=require("readline-sync");

name=readLineSync.question("May I know your good name : ");

console.log("Hi! Welcome to the quiz "+ name);

questions=
[
  {question:"What is somesh favorite colour? ",
  answer:"white",
  },
  {
    question: "Did he like F.R.I.E.N.D.S [y/n] : ",
    answer:"y",
  }
]
var score=0;
function play(question,answer){
  var ans=readLineSync.question(question)
  score++;
  if(ans===answer){
    console.log("You are correct");
  }
  else{
    console.log("You are wrong ");
  }
}
if(readLineSync.keyInYN('Do you know somesh')){
  console.log("Get ready to play");
  for(var i=0;i<questions.length;i++){
    a=questions[i];
    play(a.question,a.answer);
  }
}
else{
  console.log("Sorry, this quiz is for only who know somesh");
}
console.log("Your score is "+score);
