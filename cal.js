let inputElement=document.getElementById("input");
let buttonElements=document.querySelectorAll("button");
let eqlBtnElement=document.getElementsByClassName("eql-btn");
let string="";
let arr = Array.from(buttonElements);
arr.forEach( button=> {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string=eval(string);
            inputElement.value=string;
        }else if(e.target.innerHTML == "AC"){
            string="";
            inputElement.value=string;
        }else if(e.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1);
            inputElement.value=string;
        }
        else{
        string +=e.target.innerHTML;
        inputElement.value=string;
        
        }
    })
});