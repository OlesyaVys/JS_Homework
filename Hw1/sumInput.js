
    button.onclick = function(){
        let result=[];
        let number=[];
        let i =0;
        let numberSort=[];
        
        for (;;i++){
            result[i]=prompt('Enter the number','');
            
            if(isNaN(result[i]) || result[i]==null || result[i]=='')
                break;
            else {number[i]=Number(result[i]);
            }
        console.log(number);    
        }
        function sortMass(a, b) {
            if (a > b) {
            return 1;
            }
            else if (b > a) {
            return -1;
            }
            else{
            return 0;
            }
        }
        number.sort(sortMass);
        for(i=0;i<number.length;i++){
            numberSort=numberSort+number[i]+'';
        }
        alert('Отсортированный массив: '+ number);
    }
    function validation(a,b){
        
        if (isNaN(a) || a==""){
            document.getElementById(b).style.border="1px solid red";
            return null;
            }
        else  return a;
    }

    button1.onclick = function(){
        let selected =[];
        selected[0]=document.getElementById('carBrand').value;
        selected[1] = document.querySelector('input[name="s"]:checked').value;
        selected[2] = document.querySelector('input[name="st"]:checked').value;
        selected[3] = document.querySelector('input[name="t"]:checked').value;
        let result=document.getElementById('mileage').value;
      
        selected[4]=validation(result,'mileage'); 
        result=document.getElementById('power').value;
        selected[5]=validation(result,'power');
        console.log(selected);
        let summ=0;
        if(selected[0]=='BMW' || selected[0]=='Mercedes' || selected[0]=='Audi'){
            summ=1300;
        }
        else if(selected[0]=='Lexus'){
            summ=1400;
        }
        else summ=1200;
        
        if (selected[1]=='0') summ=summ;
        else if (selected[1]=='3') summ=summ-20;
        else if(selected[1]=='5') summ=summ-30;
        else summ=summ-40;
        if (selected[2]=='l') summ=summ;
        else summ=summ-10;
        if (selected[3]=='petrol') summ=summ;
        else if(selected[3]=='diesel') summ=summ-10;
        else summ=summ+10;
        if(Number(selected[4])<=1000) summ=summ;
        else if(Number(selected[4])<=10000) summ=summ-100;
        else summ=summ-200;
        if(Number(selected[5])<=120) summ=summ;
        else if(Number(selected[5])<=150) summ=summ+100;
        else summ=summ+200;
        
        if (selected[4]==null || selected[5]==null){
            alert('Поля выделенные красным цветом заполнены некорректно');
        }
        else alert('Примерная стоимость вашего автомобиля: '+ summ);
      };