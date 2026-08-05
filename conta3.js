class ContaBancaria {
    #Saldo;

    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("valor de deposito inválido.");
            return;
           
        }
        this.#saldo += valor;
    }
    sacar(valor){
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return; //pausa o processo
        }
        this.#saldo -= valor;
    }
    get saldoAtual() {
        return this.#saldo;
    }
}

const contas = [ new ContaBancaria("João, 1000"), new ContaBancaria("Paulo, 500")];

//Modificações para incrementar a nossa função
contas[0].depositar (200);
contas[1].sacar(100);

contas.forEach((conta) => { console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
});