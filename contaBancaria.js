class ContaBancaria {
    constructor (senha,usuario, CPF, saldo) {
        this.senha = senha;
        this.usuario = usuario;
        this.CPF = CPF;
        this.saldo = saldo;
        usuario(){
            console.log(`O ${this.usuario} acessou seu ${saldo}.`);

        };
    };
};

class Unidade extends ContaBancaria {
    constructor (senha, usuario, CPF, saldo){
        super (senha, usuario, CPF, saldo)
         
        saque(){
            console.log(`O saque só acontecerá quando o ${this.usuario} logar com seu ${this.CPF} e entrar com a ${this.senha}.`);
        };
    };

};