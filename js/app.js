let score  = parseInt(0);
let formNum = parseInt(0);
let ansBlock;
let correctAns = [1,1,1];
let ans = [];
let ques;


function start(){
    document.getElementById("msg").style.display ="none"
    document.getElementById("startBtn").style.display ="none"
    document.getElementById("headImg").src = "img/dice2.gif"
    document.getElementById("qstn0").style.display="block"

}


//function to check for ans
function check(btnid){
    for(i = 0, i <4 , i++){
        if(document.forms[btnid].elements[i].checked){
            ans[btnid] = i;
        }
    }

}