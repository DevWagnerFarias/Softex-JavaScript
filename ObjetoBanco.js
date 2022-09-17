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
    