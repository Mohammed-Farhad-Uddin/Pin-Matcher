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

    var value = parseInt(document.getElementById('try').value, 10);
    value = isNaN(value) ? 3 : value;
        if(pin==typedNumber){
            successMsg.style.display="block";
        }else if(value<=3 && value>0){
             if(pin!=typedNumber){
                failMsg.style.display="block";
                value--;
                // document.getElementById('try').value = value;
                document.getElementById("try").innerHTML=value+" try left";
                // console.log(value);
            }
        }else if(value==0){
            document.querySelector(".submit-btn").disabled=true;
        }
        
    }