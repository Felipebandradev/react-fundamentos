import { useState } from "react";

function Produtos(){

    /* O state "produtos" é iniciado como um array vazio
     posteriormente (após p carregamento da API),
    ele  será prenchido com os objetos/produtos*/
   const [produtos, setProdutos] = useState([]);

    const carregarDados = async () =>{
        try {
          const resposta = await  fetch(`https://fakestoreapi.com/products`);
          const dados = await resposta.json();
          console.log(dados);
          setProdutos(dados);

        } catch (error){
            console.error("Houve um erro: "+error)
        }
    }



    return <h2>Produtos</h2>
}

export default Produtos;