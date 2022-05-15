function showMessege(name){
    alert (`Привет, ${name}!`);   
     }
 

 function sum(a,b){
    const result = Number(a)+Number(b)
    document.getElementById('result').value=result;
 }
 function minus(a,b){
    const result = Number(a)-Number(b);
    document.getElementById('result').value=result;
 }
 function mult(a,b){
    const result= Number(a)*Number(b);
    document.getElementById('result').value=result;
 }
 function div(a,b){
    if(Number(b)==0){
        document.getElementById('result').value="Warming! На ноль делить нельзя!";
    }
    else {
        const result = Number(a)/Number(b);
        document.getElementById('result').value=result;
    }
    
 }
function changeBackground(sender){
    console.log (sender.classList.contains("backnew"))
    if(sender.classList.contains("backnew")==true){
       sender.classList.remove("backnew");
    }
    else {
        sender.classList.add("backnew");
    }
    
}

function nextImg(){
    let imageCity=document.getElementById('imageCity');
    let str1 = imageCity.src, split = str1.split('/');
        
    let str = split[split.length-1];
    
    let number = parseInt(str.match(/\d+/));
    
    if (number<=3){
        number++;
        document.getElementById('imageCity').src = number+'.jpeg';
    }
    else {
        number=1;
        document.getElementById('imageCity').src = number+'.jpeg';
    }
}
function prevImg(){
    let imageCity=document.getElementById('imageCity');
    let str1 = imageCity.src, split = str1.split('/');
        
    let str = split[split.length-1];
    
    let number = parseInt(str.match(/\d+/));
    
    if (number>1){
        number--;
        document.getElementById('imageCity').src = number+'.jpeg';
    }
    else {
        number=4;
        document.getElementById('imageCity').src = number+'.jpeg';
    }
}
select.onclick = function(){
    const resultSelect=document.getElementById('select').value;
    console.log(resultSelect);
    if (resultSelect=='white'){
        body.classList.remove("backblack");
        body.classList.remove("backgreen");
        body.classList.add("backwhite");
    }
    if (resultSelect=='green'){
        body.classList.remove("backwhite");
        body.classList.remove("backblack");
        body.classList.add("backgreen");
    }
    if (resultSelect=='black') {
        body.classList.remove("backwhite");
        body.classList.remove("backgreen");
        body.classList.add("backblack");
    }
}