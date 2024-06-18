import prompt from 'prompt-sync'
let ler = prompt()

export function entradaDados (mensagem) {
    console.log(mensagem)
    let n = Number( ler() )
    return n
}

export function menu () {
    console.log(`Escolha uma opção:
    D - Depositar
    S - Sacar
    E - Exibir Saldo
    C - Cancelar Operação
    I - Cálculo de Simulação de Investimento
    Sair - Terminar Programa`)
    
    let opcao = ler().toUpperCase()
    return opcao
}