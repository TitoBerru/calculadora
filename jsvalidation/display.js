class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            abrirParentesis: '(',
            cerrarParentesis:')',
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
            potencia: '!',
            raizCuadrada: '√'   
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {

    //     TODO ESTO FUNCIONA
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    if(this.tipoOperacion === "raizCuadrada" ){
        console.log("entre por tipo de operacion raiz cuadrada")
        this.displayValorAnterior.textContent = this.displayValorAnterior.textContent;
        this.tipoOperacion = tipo;
        this.valorActual =this.valorActual || this.valorAnterior;
        // this.imprimirValores();
        // this.valorAnterior = this.valorActual || this.valorAnterior;
        // this.valorActual = this.valorAnterior;
    } else if(this.tipoOperacion === "potencia"){
        console.log("entre por tipo de operacion Potencia")
        this.displayValorAnterior.textContent = this.valorAnterior+'!';
        this.tipoOperacion = tipo;
        this.valorActual =this.valorActual || this.valorAnterior;
    }
     
    
    }
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        console.log("Este es el valor actual: "+ this.valorActual)
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        console.log("Este es el valor Anterior: " + this.valorAnterior);
       
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    
}
