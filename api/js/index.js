//Fetch API

//then/catch

/*  fetch('https://viacep.com.br/ws/02181190/json/')
    .then((response) => {
      response.json().then((dados) => console.log(dados));
    })
    .catch((erro) => {
      console.log(erro);
    });
*/

// async/await

async function obterDadosDoCep() {
  try {
    const response = await fetch('https://viacep.com.br/ws/02181190/json/');
    const dados = await response.json();
    console.log(dados);
  } catch (erro) {
    console.log('Deu errado!', erro);
  } finally {
    console.log('Terminou a requisição!');
  }
}

obterDadosDoCep();
