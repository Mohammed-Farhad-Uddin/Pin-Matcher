document.getElementById("pinBtn").addEventListener("click",function(){
    getPin();
});

function getPin(){
    let pinNumber=Math.round(Math.random()*10000);
    let pinString=pinNumber+'';
    if(pinString.length==4){
        document.getElementById("showPin").value=pinString;
    }else{
        return getPin();
    }
}
document.getElementById("containNum").addEventListener("click",function(event){
    const displayNum=document.getElementById("typedNumber")
    const digit=event.target.innerText;
   if(isNaN(digit)){
     if(digit==="C"){
        displayNum.value='';
    }else if(digit==="<"){
        displayNum.value=displayNum.value.slice(0,-1);
    }
   }
    else{
        displayNum.value+=digit;
    }
})

function verify(){
    const pin=document.getElementById("showPin").value;
    const typedNumber=document.getElementById("typedNumber").value
    const failMsg=document.getElementById("failMsg");
    const successMsg=document.getElementById("successMsg");

    var tryMsg = parseInt(document.getElementById('try').value);
    tryMsg = isNaN(tryMsg) ? 3 : tryMsg;
        if(pin==typedNumber){
            successMsg.style.display="block";
            failMsg.style.display="none";
        }else if(tryMsg<=3 && tryMsg>0){
             if(pin!=typedNumber){
                successMsg.style.display="none";
                failMsg.style.display="block";
                tryMsg--;
                document.getElementById('try').value = tryMsg;
                document.getElementById("try").innerHTML=tryMsg+" try left";
                // console.log(value);
            }
        }else if(tryMsg==0){
            document.querySelector(".submit-btn").disabled=true;
        }
        
    }