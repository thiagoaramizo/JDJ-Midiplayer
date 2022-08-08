const botoes = document.querySelectorAll(".tecla")

botoes.forEach( (botao, index) => {
    botao.addEventListener( "click" , () => {
        const classeSom = `#som_${botao.classList[1]}`
        console.log( classeSom )
        const som = document.querySelector( classeSom )
        som.play()
    })
})

const Objeto = function({a, b}) {
    return {
        a: () => a,
        b: () => console.log(b),
        getSum: () => console.log(a+b),
        setA: (n) => { a = n }
    }
}

const pares = new Objeto({a:1, b:2})
pares.getSum()
pares.setA(5)
console.log(pares.a())

function gol(n) {
    console.log(`1º: ${n}`)
    setTimeout(() => {
        n = 50
    }, 1000).then(
        console.log(`2º: ${n}`)
    )
}

gol(10)