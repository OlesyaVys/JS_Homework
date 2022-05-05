function showMessege(name){
    alert (`Привет, ${name}!`);   
     }
 

 function sum(a,b){
    let i = Number(a)+Number(b)
    document.getElementById('result').value=i;
 }
 function minus(a,b){
    let i = Number(a)-Number(b);
    document.getElementById('result').value=i;
 }
 function mult(a,b){
    let i= Number(a)*Number(b);
    document.getElementById('result').value=i;
 }
 function div(a,b){
    let i = Number(a)/Number(b);
    document.getElementById('result').value=i;
 }
function changeBack(sender){
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
    let str1 = imageCity.src;
    
    let str2 = 'http://127.0.0.1:5500/';
    let str = str1.replace(str2, '');
    
    let i = parseInt(str.match(/\d+/));
    
    if (i<=3){
        i++;
        document.getElementById('imageCity').src = i+'.jpeg';
    }
    else {
        i=1;
        document.getElementById('imageCity').src = i+'.jpeg';
    }
}
function prevImg(){
    let imageCity=document.getElementById('imageCity');
    let str1 = imageCity.src;
    
    let str2 = 'http://127.0.0.1:5500/';
    let str = str1.replace(str2, '');
    
    let i = parseInt(str.match(/\d+/));
    
    if (i>1){
        i--;
        document.getElementById('imageCity').src = i+'.jpeg';
    }
    else {
        i=4;
        document.getElementById('imageCity').src = i+'.jpeg';
    }
}