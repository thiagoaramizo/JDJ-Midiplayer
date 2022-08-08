const botoes = document.querySelectorAll(".tecla")

botoes.forEach( (botao, index) => {
    botao.addEventListener( "click" , () => {
        const classeSom = `#som_${botao.classList[1]}`
        const som = document.querySelector( classeSom )
        const somTocando = som.cloneNode(true)
        somTocando.play()
        somTocando.addEventListener( 'ended' , () => {
            somTocando.remove()
        })
    })
})