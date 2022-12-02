//ativar links menus
const links=document.querySelectorAll(".header-menu a")
function ativarlink(link){
    const url=window.location.href
    const href=link.href

    if (url.includes(href)){
        link.classList.add("ativo")
    }
}
links.forEach(ativarlink)

// ativar itens do orçamento
const parametros=new URLSearchParams(location.search)

function ativarproduto(parametro){
    const element=document.getElementById(parametro)
    if(element){
        element.checked=true
    }
    

}
parametros.forEach(ativarproduto)

//perguntas frequentes

const perguntas=document.querySelectorAll('.perguntas button')

function ativarpergunta(event){
    const pergunta=event.currentTarget
    const controls=pergunta.getAttribute("aria-controls")
    const resposta= document.getElementById(controls)
    
    resposta.classList.toggle("ativa")
    const ativa=resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)
    
}

function eventosperguntas(pergunta){
    pergunta.addEventListener("click", ativarpergunta)

}
perguntas.forEach(eventosperguntas)


// galeria de fotos

const galeria=document.querySelectorAll(".bicicleta-imagens img")
const container=document.querySelector(".bicicleta-imagens")

function trocarimagem(ev){
    const img=ev.currentTarget
    const media=window.matchMedia("(min-width: 1000px)").matches
    if (media){
        container.prepend(img)
    }
    
}

function eventosgaleria(img){
    img.addEventListener("click", trocarimagem)

}

galeria.forEach(eventosgaleria)


//animação
if (window.SimpleAnime){
    new SimpleAnime()
}
