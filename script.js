let input=document.getElementById('inputBox');
        let buttons=document.querySelectorAll('button')
        let result="";
        let arr=Array.from(buttons);
        arr.forEach(button =>{
            button.addEventListener('click',(e)=>{
                let btnValue=e.target.innerHTML;

                if(btnValue=="="){
                    result=eval(result);//eval(preDefined Fun)
                    input.value=result
                }
                else if(btnValue=="AC"){
                    result="";
                    input.value=result;
                }
                else if(btnValue=="DEL"){
                    result=result.substring(0,result.length-1);
                    input.value=result;
                }
                else{
                    result+=btnValue;
                    input.value=result;
                }
            })
        })