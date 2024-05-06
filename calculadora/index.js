console.log("script conectado correctamente")

const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    console.log("pulsaste el boton calcular")
    console.log(txtOperacion.value)
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
  
    let resultado;

    if ((operacion == "+" || operacion == "-" || operacion == "*"
    || operacion == "/") && !isNaN(op1) || !isNaN(op2) ){
        console.log("calculo posible");
        console.log(op1, "y", op2)

        //pResultado.innerText = "calculo posible"
        
 
        switch (operacion) {
            case "+":
                resultado = op1+op2;
                break;
            case "-":
                resultado = op1-op2;
                break;
            case "*":
                resultado = op1*op2;
                break;
            case "/":
                resultado = op1/op2;
                break;
        }
        console.log(resultado)
        pResultado.style = "color:black"
        pResultado.innerText = resultado;

    }else
        console.log("Calculo no es posible")
        pResultado.style = "color:red" 
        pResultado.innerText = "calculo imposible" // resultado

}