export default class Calculadora {

    public a: number = 0;
    public b: number = 0;
    public resultado: number = 0;

    constructor() {}

    somar() {
        this.resultado =  this.a + this.b;
    }
    subtrair() {
        this.resultado =  this.a - this.b;
    }
    multiplicar() {
        this.resultado =  this.a * this.b;
    }
    dividir() {
        this.resultado =  this.a / this.b;
    }
}