function calc1(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var n = document.getElementById('input');

    if(document.getElementById('add').checked){
       sum = num1 + num2;
       n.value = sum;


     } if(document.getElementById('sub').checked){
       sub = num1 - num2;
       n.value = sub;


    }    if(document.getElementById('div').checked){
       div = num1 / num2;
       n.value = div;


    }    if(document.getElementById('mul').checked){
       mul = num1 * num2;
       n.value = mul;


    } if(document.getElementById('add').checked == false && document.getElementById('sub').checked == false && document.getElementById('div').checked == false && document.getElementById('mul').checked == false){
       n.value = 'Invalid Operation'
    }

}