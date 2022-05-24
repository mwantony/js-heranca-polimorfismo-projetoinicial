import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }

    sacar(valor) {
        const taxa = valor / 100 * 20
        return this._sacar(valor, taxa)
    }
}