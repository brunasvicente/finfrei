import { entradaDados } from './menu.js'

//Depositar Saldo
export function depositar (saldo) {
    let continuar = true

    while (continuar) {
        let qntD = entradaDados('Quanto dinheiro deseja depositar?')

        if (qntD > 0) {
            continuar = false

            let v = saldo + qntD
            return v
        }
    }
}

//Sacar Saldo
export function sacar (saldo) {
    let continuar = true

    while (continuar) {
        let qntS = entradaDados('Quanto dinheiro deseja sacar?')

        if (qntS > 0 && qntS <= saldo) {
            continuar = false

            let v = saldo - qntS
            return v
        }

        else {
            console.log('Opção inválida! Tente novamente.')
        }
    }
}

//Consultar Saldo
export function exibirSaldo (saldo) {
    return saldo
}

//Calcular Juros Compostos
export function simularInvestimento (capital) {
    let taxaJuros = entradaDados('Informe o valor da taxa de juros')

    let tempoInvestido = entradaDados('Informe o período de tempo investido')

    let calculo = ( 1 + (taxaJuros /100) ) ** tempoInvestido
    let calculo2 = capital * calculo
    return calculo2
}