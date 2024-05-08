
function validar(valor){
    let validarBill =document.getElementById("bill");
    let validarPeople =document.getElementById("person");

    if(validarBill.value !==""){
        if(validarPeople.value!==""){
            calc(valor);
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
}amount

function calc(valor){
    var valorGorjeta=valor.value;
    console.log(valorGorjeta);
    document.getElementById("err2").style.display="none";
    document.getElementById("err").style.display="none";

    let valorConta = parseFloat(document.getElementById("bill").value);
    let numeroPessoas = parseFloat(document.getElementById("person").value);
    let total = document.getElementById("total");
    let amount = document.getElementById("amount");

    let totalGorjeta = (valorConta * valorGorjeta) /100;
    let sum = valorConta + totalGorjeta;
    let totalPorPessoa=sum/numeroPessoas;
    let totalGorjetaPessoa = totalGorjeta/numeroPessoas;
    amount.innerHTML="$" + totalGorjetaPessoa.toFixed(2)
    total.innerHTML = "$"+ totalPorPessoa.toFixed(2);
    colorReset()


}
function colorReset(){
    if (total != ""){
        var botao=document.getElementById("reset");
        botao.style.color="hsl(183, 100%, 15%)";
        botao.style.backgroundColor="hsl(172, 67%, 45%)";
    }
}
function reset(){
   
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("person").value;
    
    if(bill!=="" && people!==""){
        location.reload();
    }
}