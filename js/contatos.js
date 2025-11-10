'use strict'

export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Vitor Miguel",
    "celular": "11 9 7731-6464",
    "foto": "semfoto.png",
    "email": "vitormiguel@gmail.com",
    "endereco": "Rua dos Anjos, 999",
    "cidade": "Osasco"
}

