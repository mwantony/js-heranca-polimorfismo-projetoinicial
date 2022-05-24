import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente) {
        super(0, cliente, 1001)
    }

    sacar(valor) {
        const taxa = valor / 100 * 1
        return this._sacar(valor, taxa)
    }
}