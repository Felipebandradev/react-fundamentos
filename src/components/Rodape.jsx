function Rodape() {
  {/* Usando variaveis em formato de objeta para aplicar o css inline
    e podendo assim reaproveita-lo */}
  const exemploEstilos = {
    backgroundColor: "#9370db",
    color: "#fff",
    padding: "2%",
  };
  return (

    <footer style={exemploEstilos}>
      {/* Utilizando o css in js inline 
      obs: ele é em formato de obj  */}
      <h2 style={{textAlign: "center"}}>Rodapé da aplicação</h2>
    </footer>
  );
}

export default Rodape;
