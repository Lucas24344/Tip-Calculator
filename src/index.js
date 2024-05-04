function validar(){
    let validarBill =document.getElementById("bill");
    let validarPeople =document.getElementById("person");

    if(validarBill.value !==""){
        if(validarPeople.value!==""){
            calc();
        }
        else{
            document.getElementById("err2").style.display="block";
        }  
    }
    else if(validarBill.value=="" && validarPeople.value==""){
        document.getElementById("err2").style.display="block";
        document.getElementById("err").style.display="block";
    }
    else{
        document.getElementById("err").style.display="block";
    }
}

function calc(){
    document.getElementById("err2").style.display="none";
    document.getElementById("err").style.display="none";

    let select = parseFloat(document.querySelector("button").value);
    let bill = parseFloat(document.getElementById("bill").value);
    let people = parseFloat(document.getElementById("person").value);
    let total = document.getElementById("total");

    let div = bill * (select /100);
    var sum = (bill + div)/people;
    total.innerHTML = "$"+sum.toFixed(2);
}

function reset(){
    location.reload();
}
function validarReset(){

}

