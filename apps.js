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
    if(pin==typedNumber){
        successMsg.style.display="block";
    }else{
        failMsg.style.display="block"
    }
}