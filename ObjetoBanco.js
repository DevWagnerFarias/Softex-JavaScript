/*Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser:
buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.*/

function Banco(agencia, conta, saldo, tipo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    buscarSaldo = function buscarSaldo() {
        return this.saldo;
    };
    depositar = function deposito(saldo, deposito) {
        this.saldo = saldo + deposito;
        return this.saldo;
    };
    sacar = function saque(saldo, saque) {
        this.saldo = saldo - saque;
        return this.saldo;
    };
    numconta = () => {
        return this.conta;
    };
};
    
