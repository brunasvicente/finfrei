import { depositar, sacar, exibirSaldo, simularInvestimento } from './financeiro.js'
import { entradaDados, menu } from './menu.js'

export function app () {
    let cont = 0 
    let a = []

    let s = entradaDados('Informe o valor do saldo')

    if (cont == 0) {
        a[0] = s
        cont++
    }

    let c = true

    while (c) {
        let o = menu()

        if (o == 'D') {
            s = depositar(s)
            console.clear()

            a[cont] = s
            cont++
        }

        else if(o == 'S') {
            s = sacar(s)
            console.clear()

            a[cont] = s
            cont++
        }

        else if (o == 'E') {
            let valor = exibirSaldo(s)

            console.clear()
            console.log(`Valor atual do saldo: R$${valor}`)
        }

        else if (o == 'C') {
            s = a[cont -2]
            console.clear()
        }

        else if (o == 'SAIR') {
            c = false
        }

        else if (o == 'I') {
            let lucro = simularInvestimento(s)

            console.clear()
            console.log(`Lucro obtido com o investimento: R$${lucro.toFixed(2)}`)
        }

        else {
            console.clear()
            console.log('Opção inválida! Tente novamente.')
        }
    }

    return 'Obrigado por usar nossos serviços do FinFrei!'
}