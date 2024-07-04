function calculatorLove(){
    const name1 =document.getElementById('name1').value.trim();
    const name2 =document.getElementById('name2').value.trim();

    if(name1==="" || name2===""){
        alert("Please enter both names.")
    }else{
        const lovePrecentage =Math.floor(Math.random()*101);

        const result = document.getElementById('result');

        result.innerHTML=`${name1} and ${name2} 's love precentge:${lovePrecentage}`;

        if(lovePrecentage <30){
            result.innerHTML+='<br> not a great match. keeping Looling! ';
        }else if(lovePrecentage>=30 && lovePrecentage<70){
            result.innerHTML+='<br> there is potential. Give it a try!'
            
        }else{
            result.innerHTML+='<br> Great match! Love is in the Air😍'
        }
    }

    
}