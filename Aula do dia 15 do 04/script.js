    //Nosso banco de dados
    let bancoDeCandidatos = [];

    //capturando o evento de envio do formulario
    document.getElementById('formCandidato').addEventListener('submit', function(evento) {
        evento.preventDefault(); //evita que a pagina recarregue

    //coletando os valores do formulario
    const nome = document.getElementById('nome').value;
    const tecnologia = document.getElementById('tecnologia').value;
    const experiencia = Number(document.getElementById(experiencia).value);

    //criando o objeto do candidato
    const novoCandidato = {
        nome: nome,
        tecnologia: tecnologia,
        experiencia: experiencia
    };

    //Inserindo no array com .push()
    bancoDeCandidatos.push(novoCandidato);

    alert(`${nome} cadastrado com sucesso!`)
    this.reset();//Limpa o fomulario

    console.log('Candidato cadastrado:', bancoDeCandidatos);
});

