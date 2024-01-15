import { useEffect, useState } from "react";

function Produtos(){

    /* O state "produtos" é iniciado como um array vazio
     posteriormente (após p carregamento da API),
    ele  será prenchido com os objetos/produtos*/
    const [produtos, setProdutos] = useState([]);

    /* Gerenciando efeito colateral
    do componente para o gerenciamento dos dados da API 
    
    Fluxo geral de  funcionamento do código abaixo:
    
    1) useEffect é carregado uma vez e após a montagem do page (produtos)
    Obs: o [] indica que o useEffect não tem dependências adicionais 
    e que será executado uma vez.

    2) Em seguida, ele executa a função carregarProdutos
    
    3) Ao término dela, atualiza o state (Produtos)

    */
    useEffect(() =>{
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

        carregarDados();
    }, [] );

    



    return <h2>Produtos</h2>
}

export default Produtos;