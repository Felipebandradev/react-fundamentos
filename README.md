# Fundamentos de React

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### CSS in JS

- CSS inline: aplicando via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades. No footer tem exemplo de css inline

- CSS externo e global usando arquivo.css e importando no main.jsx usamos o mome index.css

- CSS Module: arquivo CSS especial relacionando ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando complitos de classes com o mesmo nome.


---
## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx
