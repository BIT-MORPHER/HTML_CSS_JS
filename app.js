function myFunc(){
    let date=new Date();
    let arr=['Sunday','Monday','Tuesday','Wednesday',
    'Thursaday','Friday','Saturady']
    let todayDate=date.getDay();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let s=`Today is : ${arr[todayDate]}    Current time : ${hour}:${min}:${sec}`;
    document.write(s);
  }

function sum(){
      var firstNum=document.getElementById('firstNumber').value;
      var secondNum=document.getElementById('secondNumber').value;
      console.log(firstNum);
      var sumVal=parseInt(firstNum)+parseInt(secondNum);
      document.getElementById('result').innerText=`The result is ${sumVal}`;
}

function divide(){
    var firstNum=parseInt(document.getElementById('firstNumber').value);
    var secondNum=parseInt(document.getElementById('secondNumber').value);
    console.log(firstNum);
    if(secondNum===0){
        document.getElementById('result').innerText=`Can't Divide with zero`; 
    }
   else{
     var divVal=firstNum/secondNum;
     document.getElementById('result').innerText=`The result is ${divVal}`;
    }
}

function checkGrade(){
   var marks=parseInt(document.getElementById('marks').value);
   var exam=document.getElementById('examtype').value;
   if(marks>89 && exam=='Final Exam'){
     return true;
   }
   else if(marks>=89 && marks<=100){
    return true;
   }
   else{
    return false;
   }
}




