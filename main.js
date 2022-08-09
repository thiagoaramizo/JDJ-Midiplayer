const botoes = document.querySelectorAll(".tecla")
const teclado = document.querySelector(".teclado")
const marca = document.querySelector("h1")

botoes.forEach( (botao, index) => {
    botao.addEventListener( "click" , () => {
        const classeSom = `#som_${botao.classList[1]}`
        const som = document.querySelector( classeSom )
        const somTocando = som.cloneNode(true)
        somTocando.play()
        teclado.classList.add("teclado-ativo")
        marca.classList.add("marca-ativa")
        setTimeout(() => {
            teclado.classList.remove("teclado-ativo")
            marca.classList.remove("marca-ativa")
        }, 150)
        somTocando.addEventListener( 'ended' , () => {
            somTocando.remove()
        })
    })
})

var tocar = false

document.querySelector("#tocar").addEventListener("click", () => {
    const botao_pom = document.querySelector(".tecla_pom")  
    tocar = !tocar   
    if( tocar ){
        setInterval(() => {
            botao_pom.click()
        }, 1000)
    } else return false
})
    

