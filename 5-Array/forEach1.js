const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, i) {
    console.log(`${i +1} - ${nome}`)
})

aprovados.forEach(nome => console.log(`${nome} Foi aprovado`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)