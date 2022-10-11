
class Calculadora {
    
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
    potencia(valorActual){
        // num1 = displayValorAnterior.innerHTML;
        // console.log("num1 es: " + num1)
        console.log("display actual es: "+displayValorActual.innerHTML)
        return valorActual*valorActual;
    
    }
    raizCuadrada(valorActual){
        
        // if (displayValorActual){
        //     console.log("El valor actual desde raiz cuadrada: "+displayValorActual.innerHTML)
        // }else if(displayValorAnterior){
        //     console.log(""+displayValorAnterior.innerHTML)
        // }
        return Math.sqrt(valorActual);
       
    }
    
} 