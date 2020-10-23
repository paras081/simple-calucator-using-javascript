var valueA,valueB,arithOperation;
function entervalue(no){
    document.getElementById('num').value += no;
    }
function getOperator(strOperator){
  
    arithOperation=strOperator;
    valueA = document.getElementById('num').value;
    //console.log(valueA);
    document.getElementById('num').value=null;
    
}
function result(){
    
    valueB = document.getElementById('num').value;
    
    switch(arithOperation){ 
        case '+':
            document.getElementById('num').value=parseInt(valueA) + parseInt(valueB);
            alert(document.getElementById('num').value);
            break;
        case '-':
            document.getElementById('num').value=parseInt(valueA) - parseInt(valueB);
            break;
        case '/':
            document.getElementById('num').value=parseInt(valueA) / parseInt(valueB);
            break;
        case '*':
            document.getElementById('num').value=parseInt(valueA) * parseInt(valueB);
            break;
        default:
            document.getElementById('num').value="Error in input !";
            break;
    }
}
function resultClear(){
     document.getElementById('num').value=null;
}