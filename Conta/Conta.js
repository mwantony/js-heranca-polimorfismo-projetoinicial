export class Conta {
    constructor(saldo, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error('Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata')
        }
        this._saldo = saldo
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 0
        return this._sacar(valor, taxa)
    }
    
    _sacar(valor, taxa) {
        if(this._saldo >= valor){
            this._saldo -= valor + taxa;
            return valor;
        }
        return 0
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}