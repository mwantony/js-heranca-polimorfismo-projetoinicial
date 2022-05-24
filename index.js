import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor('Rodrigo', 10000, 12345678900)
const gerente = new Gerente('Ricardo', 5000, 12345623400)
diretor.cadastrarSenha('123456')
gerente.cadastrarSenha('123')
const gerenteLogado = SistemaAutenticacao.login(gerente, '123')
const diretorLogado = SistemaAutenticacao.login(diretor, '123456')


const cliente = new Cliente('Lais', 2347293453, '456')
const clienteLogado = SistemaAutenticacao.login(cliente, '456')
console.log(gerenteLogado, diretorLogado, clienteLogado)
