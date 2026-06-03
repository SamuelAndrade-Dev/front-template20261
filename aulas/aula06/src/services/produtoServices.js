const url = "http://localhost:3000/produtos";

async function criar(produto) {
  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto),
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }
}

async function obter(produto) {
  try {
    const resposta = await fetch(`${url}/${produto.id}`);
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }      
}

async function listar() {
  try {
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }    
}

async function atualizar(produto) {
  try {
    const resposta = await fetch(`${url}/${produto.id}`, {
      method: "PUT",
      body: JSON.stringify(produto), // converte JS p/ JSON
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }    
}

async function remover(produto) {
  try {
    const resposta = await fetch(`${url}/${produto.id}`, {
        method: "DELETE"
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }
}

export { criar, obter, listar, atualizar, remover };
