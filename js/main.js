'use strict'

import { lerContatos } from "./contatos.js"
import { criarContato } from "./contatos.js"
import { deleteContato } from "./contatos.js"

const container             = document.getElementById('container')
const novo_contato_button   = document.getElementById('novo-contato')
const cancelar_button       = document.getElementById('cancelar')
const salvar_button         = document.getElementById('salvar')
const input_nome            = document.getElementById('nome')
const input_email           = document.getElementById('email')
const input_celular         = document.getElementById('celular')
const input_endereco        = document.getElementById('endereco')
const input_cidade          = document.getElementById('cidade')
const foto_input            = document.getElementById('foto')
const foto_img              = document.getElementById('preview-image')


async function criarContatoList() {

    const contatos = await lerContatos()

    let i = 0
    while(i < contatos.length){
        
        let card_contato        = document.createElement('div')
        let imagem_contato      = document.createElement('img')
        let nome_contato        = document.createElement('h2')
        let telefone_contato    = document.createElement('p')

        card_contato.classList.add('card-contato')
        imagem_contato.src              = contatos[i].foto
        nome_contato.textContent        = contatos[i].nome
        telefone_contato.textContent    = contatos[i].celular
     


        container.appendChild(card_contato)
        card_contato.appendChild(imagem_contato)
        card_contato.appendChild(nome_contato)
        card_contato.appendChild(telefone_contato)


        i++
    }
    
}

novo_contato_button.addEventListener('click', function () {

    const form_show = container.parentElement

    form_show.classList.remove('card-show')

    form_show.classList.add('form-show')

})

cancelar_button.addEventListener('click', function () {

    const form_show = container.parentElement

    form_show.classList.remove('form-show')

    form_show.classList.add('card-show')

    criarContatoList()
})

async function salvarContato() {
    
    let nome = input_nome.value
    let email = input_email.value
    let celular = input_celular.value
    let endereco = input_endereco.value
    let cidade = input_cidade.value
    let foto = foto_img.src

    const contato = {
        "nome": `${nome}`,
        "celular": `${celular}`,
        "foto": `${foto}`,
        "email": `${email}`,
        "endereco": `${endereco}`,
        "cidade": `${cidade}`
    }

    const success = await criarContato(contato)
    if (success){
        alert('CONTATO CRIADO COM SUCESSO!!')
        const form_show = container.parentElement
        form_show.classList.remove('form-show')
        form_show.classList.add('card-show')
        criarContatoList()
    } else {
        alert('CONTADO NÃO SALVO!!!!')
    }

}

async function  deletarContato(contato) {

    const form_show = container.parentElement

    form_show.classList.remove('card-show')

    form_show.classList.add('form-show')

    input_nome.value        = contato.nome
    input_email.value       = contato.email
    input_celular.value     = contato.celular
    input_endereco.value    = contato.endereco
    input_cidade.value      = contato.cidade
    foto_img.src            = contato.foto
    
}


foto_input.addEventListener('change', function () {
    foto_img.src = URL.createObjectURL(foto_input.files[0])
})

salvar_button.addEventListener('click', function () {
    salvarContato()
    input_nome.value = ''
    input_email.value = ''
    input_celular.value = ''
    input_endereco.value = ''
    input_cidade.value = ''
    foto_img.src = ''
})





criarContatoList()